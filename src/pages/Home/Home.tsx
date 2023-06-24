import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import './Home.scss';
import Notification from '../../components/Notification/Notification';
import CardJob from '../../components/CardJob/CardJob';
import { filterListSelector } from '../../redux/selectors';
import { ListJobProps } from '../../Model/ListJob';
import Filter from '../../components/Filter/Filter';

import { DragDropContext, Draggable, DropResult, Droppable } from '@hello-pangea/dnd';
import { changeOrderTodo, changeStatusToTodo, deleteTodo, moveToTodo } from './todoSlice';
import {
    changeOrderProcess,
    changeStatusToProcessing,
    deleteProcess,
    moveToProcessing,
} from './processSlice';
import { changeOrderDone, changeStatusToDone, deleteDone, moveToDone } from './doneSlice';

function Home() {
    // Redux
    const dispatch = useDispatch();

    const list = useSelector(filterListSelector);
    const todoListFilter: ListJobProps[] = [];
    const processListFilter: ListJobProps[] = [];
    const doneListFilter: ListJobProps[] = [];

    list.map((job) => {
        if (job.status === 'Todo') todoListFilter.push(job);
        if (job.status === 'Processing') processListFilter.push(job);
        if (job.status === 'Done') doneListFilter.push(job);
    });

    // Drag and drop
    const handleDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        // Drag từ cột todo
        if (result.source.droppableId === 'Todo') {
            if (result.destination.droppableId === 'Processing') {
                dispatch(
                    moveToProcessing({
                        data: todoListFilter.find(
                            (job) => job.id.toString() === result.draggableId,
                        ),
                        index: result.destination.index,
                    }),
                );
                dispatch(deleteTodo(result.source.index));
                dispatch(changeStatusToProcessing(result.destination.index));
            }

            if (result.destination.droppableId === 'Done') {
                dispatch(
                    moveToDone({
                        data: todoListFilter.find(
                            (job) => job.id.toString() === result.draggableId,
                        ),
                        index: result.destination.index,
                    }),
                );
                dispatch(deleteTodo(result.source.index));
                dispatch(changeStatusToDone(result.destination.index));
            }

            if (result.destination.droppableId === 'Todo') {
                dispatch(
                    changeOrderTodo({
                        from: result.source.index,
                        to: result.destination.index,
                    }),
                );
            }
        }

        // Drag từ cột Process
        if (result.source.droppableId === 'Processing') {
            if (result.destination.droppableId === 'Todo') {
                dispatch(
                    moveToTodo({
                        data: processListFilter.find(
                            (job) => job.id.toString() === result.draggableId,
                        ),
                        index: result.destination.index,
                    }),
                );
                dispatch(deleteProcess(result.source.index));
                dispatch(changeStatusToTodo(result.destination.index));
            }

            if (result.destination.droppableId === 'Done') {
                dispatch(
                    moveToDone({
                        data: processListFilter.find(
                            (job) => job.id.toString() === result.draggableId,
                        ),
                        index: result.destination.index,
                    }),
                );
                dispatch(deleteTodo(result.source.index));
                dispatch(changeStatusToDone(result.destination.index));
            }

            if (result.destination.droppableId === 'Processing') {
                dispatch(
                    changeOrderProcess({
                        from: result.source.index,
                        to: result.destination.index,
                    }),
                );
            }
        }

        // Drag từ cột Done
        if (result.source.droppableId === 'Done') {
            if (result.destination.droppableId === 'Processing') {
                dispatch(
                    moveToProcessing({
                        data: doneListFilter.find(
                            (job) => job.id.toString() === result.draggableId,
                        ),
                        index: result.destination.index,
                    }),
                );
                dispatch(deleteDone(result.source.index));
                dispatch(changeStatusToProcessing(result.destination.index));
            }

            if (result.destination.droppableId === 'Todo') {
                dispatch(
                    moveToTodo({
                        data: doneListFilter.find(
                            (job) => job.id.toString() === result.draggableId,
                        ),
                        index: result.destination.index,
                    }),
                );
                dispatch(deleteDone(result.source.index));
                dispatch(changeStatusToTodo(result.destination.index));
            }

            if (result.destination.droppableId === 'Done') {
                dispatch(
                    changeOrderDone({
                        from: result.source.index,
                        to: result.destination.index,
                    }),
                );
            }
        }
    };

    return (
        <div className="ms-2 me-3">
            {/* Phần đầu của content */}
            {false && (
                <Row className="gap-2" style={{ height: '29vh' }}>
                    {/* Notification */}
                    <Col className="bg home_col_head ms-2" style={{ backgroundColor: '#343446' }}>
                        <div className="home_head_content home_notifyication">
                            Thông báo
                            <div className="position-relative">
                                <FontAwesomeIcon icon={faBell} />
                                <span className="position-absolute top-20 right-20 translate-middle p-1 bg-danger rounded-circle">
                                    <span className="visually-hidden">New alerts</span>
                                </span>
                            </div>
                        </div>
                        <div className="overflow-y-scroll" style={{ height: '80%' }}>
                            <div className="mt-2 mx-3">
                                <Notification type="success" text="Bạn đã đăng nhập thành công" />
                                <Notification type="warning" text="Công việc sắp dến hạn" />
                                <Notification
                                    type="success"
                                    text="Bạn đã thêm công việc mới thành công"
                                />
                                <Notification type="danger" text="Công việc  đã quá hạn" />
                                <Notification type="warning" text="Công việc sắp dến hạn" />
                            </div>
                        </div>
                    </Col>
                </Row>
            )}

            {/* Phần Content chính */}
            <div style={{ height: '100vh' }}>
                <Row className="h-100">
                    {/* Cột bên trái chứa filter */}
                    <Col xs={1} className="p-0 d-flex flex-column" style={{ width: '6%' }}>
                        <Filter />
                    </Col>

                    {/* Cột bên phải chứa content chính */}
                    <Col className="ms-3 p-0">
                        {/* Head */}
                        <div className="home_content_header d-flex justify-content-around align-items-center shadow-sm border border-dark-subtle rounded-3">
                            <div className="d-flex align-items-center fw-medium">
                                <div>To do </div>
                                <span
                                    className="ms-1 center small fw-medium text-white rounded-circle"
                                    style={{
                                        width: '1.6rem',
                                        height: '1.6rem',
                                        backgroundColor: 'rgb(79 97 112 / 50%)',
                                    }}
                                >
                                    {todoListFilter.length}
                                </span>
                            </div>
                            <div className="d-flex align-items-center fw-medium">
                                <div>Processing</div>
                                <span
                                    className="ms-1 center small fw-medium text-primary rounded-circle"
                                    style={{
                                        width: '1.6rem',
                                        height: '1.6rem',
                                        backgroundColor: 'rgb(103 187 255 / 50%)',
                                    }}
                                >
                                    {processListFilter.length}
                                </span>
                            </div>
                            <div className="d-flex align-items-center fw-medium">
                                <div>Done</div>
                                <span
                                    className="ms-1 center small fw-medium rounded-circle"
                                    style={{
                                        width: '1.6rem',
                                        height: '1.6rem',
                                        backgroundColor: 'rgb(50 205 107 / 50%)',
                                        color: 'rgb(4 64 3)',
                                    }}
                                >
                                    {doneListFilter.length}
                                </span>
                            </div>
                        </div>

                        {/* Todolist */}
                        <div className="mt-3 w-100 h-100 d-flex justify-content-between">
                            {/* Todo */}
                            <DragDropContext onDragEnd={handleDragEnd}>
                                <Droppable droppableId="Todo">
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            className="overflow-y-scroll"
                                            style={{
                                                width: '32.5%',
                                                height: '93vh',
                                                backgroundColor: snapshot.isDraggingOver
                                                    ? '#D3D3D3'
                                                    : 'transparent',
                                            }}
                                            {...provided.droppableProps}
                                        >
                                            <div>
                                                {todoListFilter.map((TodoJob, index) => (
                                                    <Draggable
                                                        // adding a key is important!
                                                        key={TodoJob.id}
                                                        draggableId={TodoJob.id.toString()}
                                                        index={index}
                                                    >
                                                        {(provided) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                            >
                                                                <CardJob
                                                                    Job={TodoJob}
                                                                    index={index}
                                                                />
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                            </div>
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>

                                {/* Processing */}
                                <Droppable droppableId="Processing">
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            className="overflow-y-scroll"
                                            style={{
                                                width: '32.5%',
                                                height: '93vh',
                                                backgroundColor: snapshot.isDraggingOver
                                                    ? '#87CEFA'
                                                    : 'transparent',
                                            }}
                                            {...provided.droppableProps}
                                        >
                                            <div>
                                                {processListFilter.map((ProcessingJob, index) => (
                                                    <Draggable
                                                        // adding a key is important!
                                                        key={ProcessingJob.id}
                                                        draggableId={ProcessingJob.id.toString()}
                                                        index={index}
                                                    >
                                                        {(provided) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                            >
                                                                <CardJob
                                                                    Job={ProcessingJob}
                                                                    index={index}
                                                                />
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                            </div>
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>

                                {/* Done */}
                                <Droppable droppableId="Done">
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            className="overflow-y-scroll"
                                            style={{
                                                width: '32.5%',
                                                height: '93vh',
                                                backgroundColor: snapshot.isDraggingOver
                                                    ? '#90EE90'
                                                    : 'transparent',
                                            }}
                                            {...provided.droppableProps}
                                        >
                                            <div>
                                                {doneListFilter.map((doneJob, index) => (
                                                    <Draggable
                                                        // adding a key is important!
                                                        key={doneJob.id}
                                                        draggableId={doneJob.id.toString()}
                                                        index={index}
                                                    >
                                                        {(provided) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                            >
                                                                <CardJob
                                                                    Job={doneJob}
                                                                    index={index}
                                                                />
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                            </div>
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </DragDropContext>

                            {/* <div
                                    className="overflow-y-scroll"
                                    style={{ width: '32.5%', height: '93vh' }}
                                >
                                    {/* Card *
                                    {todoListFilter.map((TodoJob, index) => (
                                        <CardJob Job={TodoJob} key={index} index={index} />
                                    ))}
                                </div> */}

                            {/* Cột Processing */}
                            {/* <div
                                className="overflow-y-scroll"
                                style={{ width: '32.5%', height: '93vh' }}
                            >
                                {processListFilter.map((ProcessingJob, index) => (
                                    <CardJob Job={ProcessingJob} key={index} index={index} />
                                ))}
                            </div> */}

                            {/* Cột Done */}
                            {/* <div
                                className="overflow-y-scroll"
                                style={{ width: '32.5%', height: '93vh' }}
                            >
                                {doneListFilter.map((DoneJob, index) => (
                                    <CardJob Job={DoneJob} key={index} />
                                ))}
                            </div> */}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Home;