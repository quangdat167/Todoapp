export interface stepsProps {
    stt: statusValue;
    name: string;
}

type statusValue = 'Todo' | 'Processing' | 'Done';
export interface ListJobProps {
    id: number | string;
    task: string;
    status: statusValue;
    deadline: Date | string;
    steps: stepsProps[];
    description: string;
    project: string;
    type: 'Việc cá nhân' | 'Việc nhóm';
    priority: boolean;
    groupname: string;
}

export const ListJob: ListJobProps[] = [
    {
        id: 1,
        task: 'Đọc sách "Sapiens: Tóm tắt lịch sử nhân loại"',
        status: 'Todo',
        deadline: '2023-06-27T14:24',
        steps: [
            { stt: 'Todo', name: 'Mua sách hoặc mượn sách từ thư viện' },
            { stt: 'Todo', name: 'Đọc và tìm hiểu nội dung sách' },
        ],
        description: 'Đọc cuốn sách Sapiens về lịch sử nhân loại',
        project: 'Cá nhân',
        type: 'Việc cá nhân',
        priority: true,
        groupname: '',
    },
    {
        id: 2,
        task: 'Chuẩn bị buổi họp dự án',
        status: 'Processing',
        deadline: '2023-06-02T17:20',
        steps: [
            { stt: 'Done', name: 'Xác định thời gian và địa điểm họp' },
            { stt: 'Done', name: 'Chuẩn bị agenda buổi họp' },
            { stt: 'Processing', name: 'Gửi thông báo cho thành viên' },
        ],
        description: 'Chuẩn bị và tổ chức buổi họp dự án',
        project: 'Dự án',
        type: 'Việc nhóm',
        priority: false,
        groupname: 'UI_UX',
    },
    {
        id: 3,
        task: 'Đặt lịch khám bác sĩ',
        status: 'Todo',
        deadline: '2023-06-30',
        steps: [
            { stt: 'Todo', name: 'Chọn bác sĩ và đặt lịch hẹn' },
            { stt: 'Todo', name: 'Chuẩn bị các thông tin cần thiết' },
        ],
        description: 'Đặt lịch khám bác sĩ cho kiểm tra sức khỏe',
        project: 'Cá nhân',
        type: 'Việc cá nhân',
        priority: true,
        groupname: '',
    },
    {
        id: 4,
        task: 'Đặt vé xem phim',
        status: 'Processing',
        deadline: '2023-06-15T15:30',
        steps: [
            { stt: 'Done', name: 'Chọn bộ phim muốn xem' },
            { stt: 'Processing', name: 'Tìm suất chiếu phù hợp' },
            { stt: 'Processing', name: 'Đặt vé online hoặc tại rạp' },
        ],
        description: 'Đặt vé xem phim cuối tuần với bạn bè',
        project: 'Cá nhân',
        type: 'Việc cá nhân',
        priority: false,
        groupname: '',
    },
    {
        id: 5,
        task: 'Hoàn thiện bài tập lớn',
        status: 'Done',
        deadline: '2023-06-30',
        steps: [
            { stt: 'Done', name: 'Nghiên cứu và phân tích yêu cầu' },
            { stt: 'Done', name: 'Thiết kế và triển khai giải pháp' },
            { stt: 'Done', name: 'Kiểm thử và sửa lỗi' },
        ],
        description: 'Hoàn thiện bài tập lớn môn học',
        project: 'Học tập',
        type: 'Việc cá nhân',
        priority: true,
        groupname: '',
    },
    {
        id: 6,
        task: 'Họp nhóm dự án',
        status: 'Todo',
        deadline: '2023-06-20',
        steps: [
            { stt: 'Todo', name: 'Chuẩn bị agenda cuộc họp' },
            { stt: 'Todo', name: 'Gửi thông báo cho thành viên' },
            { stt: 'Todo', name: 'Tiến hành cuộc họp' },
        ],
        description: 'Họp nhóm dự án để trao đổi tiến độ và phân công công việc',
        project: 'Dự án ABC',
        type: 'Việc nhóm',
        priority: false,
        groupname: 'Thực tập',
    },
    {
        id: 7,
        task: 'Mua ví mới',
        status: 'Todo',
        deadline: '2023-06-25T09:30',
        steps: [
            { stt: 'Todo', name: 'Tìm hiểu và chọn mẫu ví' },
            { stt: 'Todo', name: 'Đi mua ví hoặc đặt mua online' },
        ],
        description: 'Cần mua một chiếc ví mới để thay thế ví cũ',
        project: 'Cá nhân',
        type: 'Việc cá nhân',
        priority: true,
        groupname: '',
    },
    {
        id: 8,
        task: 'Luyện tập thể dục',
        status: 'Todo',
        deadline: '2023-06-18T16:40',
        steps: [
            { stt: 'Todo', name: 'Chuẩn bị quần áo và dụng cụ thể dục' },
            { stt: 'Todo', name: 'Thực hiện bài tập luyện tập' },
        ],
        description: 'Luyện tập thể dục hàng ngày để duy trì sức khỏe',
        project: 'Sức khỏe',
        type: 'Việc cá nhân',
        priority: true,
        groupname: '',
    },
    {
        id: 9,
        task: 'Xem phim mới',
        status: 'Done',
        deadline: '2023-06-12T12:24',
        steps: [
            { stt: 'Done', name: 'Tìm hiểu và chọn bộ phim mới' },
            { stt: 'Done', name: 'Tìm suất chiếu phim' },
        ],
        description: 'Dành thời gian xem phim mới để giải trí',
        project: 'Giải trí',
        type: 'Việc cá nhân',
        priority: false,
        groupname: '',
    },
    {
        id: 10,
        task: 'Hoàn thành báo cáo',
        status: 'Todo',
        deadline: '2023-06-28',
        steps: [
            { stt: 'Todo', name: 'Thu thập dữ liệu' },
            { stt: 'Todo', name: 'Phân tích và xử lý dữ liệu' },
            { stt: 'Todo', name: 'Viết báo cáo' },
        ],
        description: 'Hoàn thành báo cáo tháng cho công việc',
        project: 'Báo cáo',
        type: 'Việc nhóm',
        priority: true,
        groupname: 'UI_UX',
    },
    {
        id: 11,
        task: 'Đặt lịch hẹn với khách hàng',
        status: 'Todo',
        deadline: '2023-06-22T11:00',
        steps: [
            { stt: 'Todo', name: 'Liên hệ và thống nhất thời gian' },
            { stt: 'Todo', name: 'Xác nhận địa điểm và nội dung cuộc hẹn' },
        ],
        description: 'Đặt lịch hẹn với khách hàng để thảo luận về dự án',
        project: 'Kinh doanh',
        type: 'Việc cá nhân',
        priority: false,
        groupname: '',
    },
    {
        id: 12,
        task: 'Dọn dẹp nhà cửa',
        status: 'Todo',
        deadline: '2023-06-17',
        steps: [
            { stt: 'Todo', name: 'Sắp xếp và dọn dẹp các phòng' },
            { stt: 'Todo', name: 'Vệ sinh và lau chùi nơi cần thiết' },
        ],
        description: 'Dọn dẹp nhà cửa để có không gian sạch sẽ và gọn gàng',
        project: 'Cá nhân',
        type: 'Việc cá nhân',
        priority: false,
        groupname: '',
    },
    {
        id: 13,
        task: 'Tham gia khóa học online',
        status: 'Done',
        deadline: '2023-06-14T09:30',
        steps: [
            { stt: 'Done', name: 'Tìm hiểu và đăng ký khóa học' },
            { stt: 'Done', name: 'Hoàn thành các bài tập và bài kiểm tra' },
        ],
        description: 'Tham gia khóa học online để nâng cao kiến thức',
        project: 'Học tập',
        type: 'Việc cá nhân',
        priority: true,
        groupname: '',
    },
    {
        id: 14,
        task: 'Lập kế hoạch du lịch',
        status: 'Todo',
        deadline: '2023-06-24T14:50',
        steps: [
            { stt: 'Todo', name: 'Chọn điểm đến và thời gian du lịch' },
            { stt: 'Todo', name: 'Đặt vé và book chỗ nghỉ' },
        ],
        description: 'Lập kế hoạch cho chuyến du lịch sắp tới',
        project: 'Giải trí',
        type: 'Việc cá nhân',
        priority: false,
        groupname: '',
    },
    {
        id: 15,
        task: 'Đi mua quà sinh nhật',
        status: 'Done',
        deadline: '2023-06-26T08:00',
        steps: [
            { stt: 'Done', name: 'Lên danh sách quà tặng' },
            { stt: 'Done', name: 'Mua quà và sắp xếp đóng gói' },
        ],
        description: 'Chuẩn bị quà sinh nhật cho người thân',
        project: 'Cá nhân',
        type: 'Việc cá nhân',
        priority: true,
        groupname: '',
    },
    {
        id: 16,
        task: 'Họp dự án',
        status: 'Processing',
        deadline: '2023-06-21T16:30',
        steps: [
            { stt: 'Done', name: 'Chuẩn bị nội dung cuộc họp' },
            { stt: 'Processing', name: 'Tổ chức cuộc họp và ghi chú' },
        ],
        description: 'Họp dự án để trình bày tiến độ và thảo luận về các vấn đề',
        project: 'Dự án',
        type: 'Việc nhóm',
        priority: false,
        groupname: 'Bách khoa',
    },
    {
        id: 17,
        task: 'Thiết kế giao diện website',
        status: 'Done',
        deadline: '2023-06-27T00:00',
        steps: [
            { stt: 'Done', name: 'Nghiên cứu và thiết kế giao diện' },
            { stt: 'Done', name: 'Chuyển đổi thiết kế sang mã nguồn' },
        ],
        description: 'Thiết kế giao diện cho website mới',
        project: 'Công việc',
        type: 'Việc cá nhân',
        priority: true,
        groupname: '',
    },
    {
        id: 18,
        task: 'Làm bài tập yoga',
        status: 'Todo',
        deadline: '2023-06-19T10:30',
        steps: [
            { stt: 'Todo', name: 'Chuẩn bị không gian và dụng cụ' },
            { stt: 'Todo', name: 'Thực hiện các động tác yoga' },
        ],
        description: 'Luyện tập yoga hàng ngày để thư giãn và tăng cường sức khỏe',
        project: 'Sức khỏe',
        type: 'Việc cá nhân',
        priority: false,
        groupname: '',
    },
    {
        id: 19,
        task: 'Thử nghiệm phần mềm',
        status: 'Todo',
        deadline: '2023-06-23T19:30',
        steps: [
            { stt: 'Todo', name: 'Tạo kịch bản thử nghiệm' },
            { stt: 'Todo', name: 'Thực hiện thử nghiệm và ghi lại kết quả' },
        ],
        description: 'Thử nghiệm phần mềm mới trước khi triển khai',
        project: 'Công việc',
        type: 'Việc cá nhân',
        priority: false,
        groupname: '',
    },
    {
        id: 20,
        task: 'Làm việc với khách hàng',
        status: 'Processing',
        deadline: '2023-06-29T15:30',
        steps: [
            { stt: 'Processing', name: 'Tiếp nhận yêu cầu khách hàng' },
            { stt: 'Processing', name: 'Tư vấn và giải đáp thắc mắc' },
        ],
        description: 'Làm việc với khách hàng để đáp ứng nhu cầu và giải quyết vấn đề',
        project: 'Kinh doanh',
        type: 'Việc cá nhân',
        priority: true,
        groupname: '',
    },
    {
        id: 21,
        task: 'Viết báo cáo tổng kết',
        status: 'Todo',
        deadline: '2023-07-05T08:00',
        steps: [
            { stt: 'Todo', name: 'Thu thập dữ liệu và thông tin' },
            { stt: 'Todo', name: 'Viết báo cáo và kiểm tra' },
        ],
        description: 'Viết báo cáo tổng kết về dự án XYZ',
        project: 'Dự án',
        type: 'Việc nhóm',
        priority: false,
        groupname: 'Bách khoa',
    },
    {
        id: 22,
        task: 'Tổ chức buổi team building',
        status: 'Todo',
        deadline: '2023-07-10T09:00',
        steps: [
            { stt: 'Todo', name: 'Lên kế hoạch và chuẩn bị hoạt động' },
            { stt: 'Todo', name: 'Thực hiện buổi team building' },
        ],
        description: 'Tổ chức buổi team building để tăng cường tinh thần đồng đội',
        project: 'Công việc',
        type: 'Việc nhóm',
        priority: true,
        groupname: 'Thực tập',
    },
    {
        id: 23,
        task: 'Học khóa học trực tuyến',
        status: 'Todo',
        deadline: '2023-07-15T08:00',
        steps: [
            { stt: 'Todo', name: 'Chọn khóa học phù hợp' },
            { stt: 'Todo', name: 'Tham gia và hoàn thành khóa học' },
        ],
        description: 'Học khóa học trực tuyến để nâng cao kiến thức và kỹ năng',
        project: 'Phát triển bản thân',
        type: 'Việc cá nhân',
        priority: false,
        groupname: '',
    },
    {
        id: 24,
        task: 'Thiết kế giao diện website',
        status: 'Processing',
        deadline: '2023-07-20T08:00',
        steps: [
            { stt: 'Done', name: 'Nghiên cứu yêu cầu và thiết kế giao diện' },
            { stt: 'Processing', name: 'Phát triển và kiểm tra giao diện' },
        ],
        description: 'Thiết kế giao diện cho website mới',
        project: 'Dự án ABC',
        type: 'Việc nhóm',
        priority: true,
        groupname: 'Thực tập',
    },
    {
        id: 25,
        task: 'Tạo kế hoạch marketing',
        status: 'Todo',
        deadline: '2023-07-25T09:00',
        steps: [
            { stt: 'Todo', name: 'Nghiên cứu thị trường và đối tượng khách hàng' },
            { stt: 'Todo', name: 'Xây dựng kế hoạch marketing chi tiết' },
        ],
        description: 'Tạo kế hoạch marketing để quảng bá sản phẩm mới',
        project: 'Marketing',
        type: 'Việc cá nhân',
        priority: false,
        groupname: '',
    },
    {
        id: 26,
        task: 'Triển khai hệ thống CRM',
        status: 'Done',
        deadline: '2023-07-30T10:00',
        steps: [
            { stt: 'Done', name: 'Chuẩn bị và cài đặt hệ thống CRM' },
            { stt: 'Done', name: 'Đào tạo nhân viên sử dụng' },
        ],
        description: 'Triển khai hệ thống CRM để quản lý khách hàng hiệu quả',
        project: 'Dự án ',
        type: 'Việc nhóm',
        priority: true,
        groupname: 'Bách khoa',
    },
    {
        id: 27,
        task: 'Phân tích dữ liệu thống kê',
        status: 'Todo',
        deadline: '2023-08-05T08:00',
        steps: [
            { stt: 'Todo', name: 'Thu thập dữ liệu từ các nguồn khác nhau' },
            { stt: 'Todo', name: 'Phân tích và xử lý dữ liệu' },
        ],
        description: 'Phân tích dữ liệu thống kê để đưa ra các thông tin quan trọng',
        project: 'Dự án Data Analytics',
        type: 'Việc nhóm',
        priority: false,
        groupname: 'Thực tập',
    },
    {
        id: 28,
        task: 'Xây dựng ứng dụng di động',
        status: 'Processing',
        deadline: '2023-08-10T08:00',
        steps: [
            { stt: 'Processing', name: 'Thiết kế giao diện và chức năng' },
            { stt: 'Todo', name: 'Phát triển và kiểm thử ứng dụng' },
        ],
        description: 'Xây dựng ứng dụng di động cho hệ điều hành iOS và Android',
        project: 'Dự án Mobile App',
        type: 'Việc nhóm',
        priority: true,
        groupname: 'Bách khoa',
    },
    {
        id: 29,
        task: 'Lập kế hoạch đào tạo nhân viên',
        status: 'Done',
        deadline: '2023-08-15T08:00',
        steps: [
            { stt: 'Done', name: 'Xác định nhu cầu đào tạo' },
            { stt: 'Done', name: 'Lập kế hoạch và triển khai' },
        ],
        description: 'Lập kế hoạch đào tạo nhân viên để nâng cao năng lực làm việc',
        project: 'Dự án HR',
        type: 'Việc cá nhân',
        priority: false,
        groupname: '',
    },
    {
        id: 30,
        task: 'Thiết kế logo mới',
        status: 'Todo',
        deadline: '2023-08-20T08:00',
        steps: [
            { stt: 'Todo', name: 'Nghiên cứu về thương hiệu và ý tưởng thiết kế' },
            { stt: 'Todo', name: 'Tạo ra các phiên bản logo' },
        ],
        description: 'Thiết kế logo mới cho công ty',
        project: 'Dự án Branding',
        type: 'Việc cá nhân',
        priority: true,
        groupname: '',
    },
];
