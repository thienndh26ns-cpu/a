// ================= 1. HÌNH ẢNH MINH HỌA TÌNH HUỐNG =================
const visualScenes = {
    call: {
        device: "📞 Cuộc gọi số lạ", signal: "⚠️ Giả mạo",
        svg: `<svg width="84" height="74" viewBox="0 0 90 80" fill="none"><rect x="27" y="6" width="36" height="68" rx="7" fill="#1e293b" stroke="#f59e0b" stroke-width="2.5"/><circle cx="45" cy="28" r="9" fill="#f59e0b"/><path d="M32 48C32 41 58 41 58 48" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/><circle cx="66" cy="18" r="10" fill="#f43f5e"/><text x="63" y="22" fill="#fff" font-size="13" font-weight="bold">!</text></svg>`,
        caption: "Số lạ tự xưng shipper / cán bộ yêu cầu chuyển khoản gấp.",
        tag: "+84 9xx.xxx.xxx • Yêu cầu chuyển phí", safe: false
    },
    sms_apk: {
        device: "📲 Tin nhắn SMS / Zalo", signal: "🚨 Tệp .APK",
        svg: `<svg width="84" height="74" viewBox="0 0 90 80" fill="none"><rect x="20" y="12" width="50" height="56" rx="8" fill="#0f172a" stroke="#f43f5e" stroke-width="2.5"/><path d="M45 24V44M37 37L45 45L53 37" stroke="#f43f5e" stroke-width="3" stroke-linecap="round"/><rect x="29" y="51" width="32" height="10" rx="3" fill="#f43f5e"/><text x="34" y="59" fill="#fff" font-size="8" font-weight="bold">.APK</text></svg>`,
        caption: "Tin nhắn đính kèm tệp cài đặt ngoài kho ứng dụng.",
        tag: "File: DichVuCong_Update_v2.apk", safe: false
    },
    phish_url: {
        device: "🌐 Trình duyệt Web", signal: "🔓 Không HTTPS",
        svg: `<svg width="92" height="74" viewBox="0 0 100 80" fill="none"><rect x="10" y="14" width="80" height="52" rx="7" fill="#0f172a" stroke="#f43f5e" stroke-width="2.5"/><line x1="10" y1="27" x2="90" y2="27" stroke="#334155" stroke-width="2"/><circle cx="18" cy="20.5" r="2.5" fill="#f43f5e"/><path d="M50 36L62 56H38L50 36Z" fill="#f59e0b"/><text x="48" y="53" fill="#0f172a" font-size="11" font-weight="bold">!</text></svg>`,
        caption: "Trang web yêu cầu nhập mật khẩu & OTP trên đường dẫn lạ.",
        tag: "http://vcb-xacthuc24h.xyz", safe: false
    },
    wifi_trap: {
        device: "📡 Wi-Fi Công cộng", signal: "⚠️ Mạng mở",
        svg: `<svg width="88" height="74" viewBox="0 0 96 80" fill="none"><path d="M18 32C35 17 61 17 78 32" stroke="#38bdf8" stroke-width="3.5" stroke-linecap="round"/><path d="M29 44C40 34 56 34 67 44" stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round"/><circle cx="48" cy="56" r="5" fill="#f43f5e"/></svg>`,
        caption: "Wi-Fi miễn phí yêu cầu đăng nhập Facebook/Google để dùng mạng.",
        tag: "SSID: Free_Airport_VIP_5G", safe: false
    },
    deepfake: {
        device: "📹 Video Call", signal: "🎭 AI Fake",
        svg: `<svg width="88" height="74" viewBox="0 0 96 80" fill="none"><rect x="16" y="14" width="64" height="52" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2.5"/><circle cx="48" cy="36" r="11" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3 2"/><path d="M33 56C35 49 61 49 63 56" stroke="#38bdf8" stroke-width="2"/></svg>`,
        caption: "Video call mờ giật 3 giây rồi tắt, nhắn tin mượn tiền gấp.",
        tag: "Cảnh báo: Khuôn mặt & Giọng nói AI", safe: false
    },
    password_sec: {
        device: "🔐 Bảo mật Tài khoản", signal: "🛡️ 2FA & Entropy",
        svg: `<svg width="84" height="74" viewBox="0 0 90 80" fill="none"><rect x="25" y="34" width="40" height="30" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="2.5"/><path d="M34 34V25C34 19 56 19 56 25V34" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/><circle cx="45" cy="48" r="4" fill="#10b981"/></svg>`,
        caption: "Thiết lập mật khẩu mạnh, mã OTP và xác thực 2 lớp.",
        tag: "Chuẩn: 2FA + Mật khẩu ≥ 12 ký tự", safe: true
    },
    gov_safe: {
        device: "🏛️ Cổng Chính thức", signal: "🔒 HTTPS",
        svg: `<svg width="88" height="74" viewBox="0 0 96 80" fill="none"><path d="M48 12L18 26H78L48 12Z" fill="#0284c7"/><rect x="24" y="28" width="8" height="28" fill="#38bdf8"/><rect x="44" y="28" width="8" height="28" fill="#38bdf8"/><rect x="64" y="28" width="8" height="28" fill="#38bdf8"/><rect x="18" y="58" width="60" height="7" rx="2" fill="#10b981"/></svg>`,
        caption: "Cổng dịch vụ công & website chính thức của trường học.",
        tag: "https://dichvucong.gov.vn", safe: true
    },
    pc_malware: {
        device: "💻 Máy tính & Trình duyệt", signal: "🚨 Infostealer",
        svg: `<svg width="88" height="74" viewBox="0 0 96 80" fill="none"><rect x="16" y="14" width="64" height="42" rx="5" fill="#0f172a" stroke="#f43f5e" stroke-width="2.5"/><path d="M36 64H60M48 56V64" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/><text x="27" y="39" fill="#f43f5e" font-size="11" font-family="monospace" font-weight="bold">COOKIE_STEAL</text></svg>`,
        caption: "Phần mềm crack hoặc máy tính công cộng chưa đăng xuất.",
        tag: "Rủi ro: Đánh cắp Session Cookie", safe: false
    }
};

// ================= 2. NGÂN HÀNG 30 CÂU HỎI 3 TẦNG =================
const questionBank = {
    1: [
        { scene: "call", q: "1. Số lạ tự xưng shipper yêu cầu chuyển 20.000đ phí ship cho đơn hàng bạn không đặt. Bạn làm gì?", opts: ["Chuyển khoản ngay", "Cúp máy và kiểm tra lại trên app mua sắm", "Đọc mã OTP cho họ kiểm tra"], ans: 1, exp: "Kẻ gian giả danh shipper để lừa tiền nhỏ hoặc dụ bấm link chiếm đoạt tài khoản." },
        { scene: "password_sec", q: "2. Cách đặt mật khẩu nào an toàn nhất?", opts: ["Dùng ngày sinh", "Dùng số điện thoại", "Chữ hoa, thường, số và ký tự đặc biệt dài ≥ 12 ký tự"], ans: 2, exp: "Mật khẩu trùng ngày sinh hoặc số điện thoại rất dễ bị dò trúng." },
        { scene: "sms_apk", q: "3. Tin nhắn báo trúng thưởng yêu cầu gửi ảnh 2 mặt CCCD để nhận giải, bạn xử lý thế nào?", opts: ["Gửi ảnh CCCD ngay", "Bỏ qua & chặn số, không gửi CCCD cho người lạ", "Gửi CCCD kèm số tài khoản"], ans: 1, exp: "Ảnh CCCD bị lộ có thể bị dùng để đăng ký vay nợ online trái phép." },
        { scene: "deepfake", q: "4. Bạn bè nhắn Facebook mượn tiền gấp qua số tài khoản người lạ. Hành động đúng nhất?", opts: ["Chuyển khoản ngay", "Gọi điện thoại trực tiếp qua số di động để xác minh", "Nhắn hỏi lại trên chính Facebook đó"], ans: 1, exp: "Tài khoản Facebook của bạn bè có thể đã bị hack; gọi thoại trực tiếp giúp xác minh chính xác." },
        { scene: "wifi_trap", q: "5. Ngồi quán cà phê dùng Wi-Fi miễn phí không mật khẩu, thói quen nào an toàn?", opts: ["Thoải mái chuyển tiền ngân hàng", "Chuyển sang 4G/5G cá nhân khi giao dịch ngân hàng", "Tự động kết nối mọi Wi-Fi mở"], ans: 1, exp: "Wi-Fi không mật khẩu dễ bị kẻ xấu nghe lén dữ liệu truyền đi." },
        { scene: "password_sec", q: "6. Mã OTP 6 chữ số ngân hàng gửi về SMS dùng để làm gì?", opts: ["Xác nhận giao dịch của riêng bạn, tuyệt đối không đọc cho ai", "Đọc cho nhân viên ngân hàng khi được hỏi", "Gửi cho người mua hàng"], ans: 0, exp: "Không nhân viên ngân hàng hay công an nào được phép hỏi mã OTP của bạn." },
        { scene: "pc_malware", q: "7. Đăng công khai ảnh vé máy bay, thẻ sinh viên lên mạng xã hội có nguy cơ gì?", opts: ["Không có nguy cơ", "Kẻ xấu thu thập thông tin cá nhân để dựng kịch bản lừa đảo", "Tăng bảo mật tài khoản"], ans: 1, exp: "Dữ liệu cá nhân công khai giúp tin tặc mạo danh bạn hoặc người thân." },
        { scene: "pc_malware", q: "8. Trước khi rời máy tính thư viện hoặc tiệm net, bước quan trọng nhất là gì?", opts: ["Chỉ bấm dấu X tắt trình duyệt", "Bấm Đăng xuất (Log out) và không lưu mật khẩu", "Để nguyên cho người sau"], ans: 1, exp: "Nếu không Đăng xuất, người ngồi sau mở lại vẫn vào thẳng tài khoản của bạn." },
        { scene: "deepfake", q: "9. Video call người thân mờ giật 3 giây rồi tắt, nhắn tin nhờ chuyển tiền gấp là dấu hiệu gì?", opts: ["Mạng yếu thật nên chuyển ngay", "Lừa đảo Deepfake cắt ghép khuôn mặt/giọng nói AI", "Lỗi camera"], ans: 1, exp: "Kẻ gian tạo cuộc gọi chớp nhoáng rồi viện cớ mạng yếu để nạn nhân không kịp nhận ra." },
        { scene: "gov_safe", q: "10. Khi điện thoại báo cập nhật phần mềm chính thức từ iOS/Android, bạn nên làm gì?", opts: ["Cập nhật định kỳ trong Cài đặt chính thức để vá lỗi", "Tải file cập nhật qua link Zalo", "Tắt nguồn mãi mãi"], ans: 0, exp: "Bản cập nhật chính thức giúp vá các lỗ hổng bảo mật nguy hiểm." }
    ],
    2: [
        { scene: "phish_url", q: "1. SMS báo khóa tài khoản, yêu cầu vào 'http://vcb-xacthuc24h.xyz'. Dấu hiệu giả mạo là gì?", opts: ["Có chữ vcb", "Đuôi tên miền .xyz lạ và dùng http:// không bảo mật", "Gửi vào ban ngày"], ans: 1, exp: "Ngân hàng Việt Nam luôn dùng tên miền .com.vn hoặc .vn có chứng chỉ HTTPS." },
        { scene: "sms_apk", q: "2. Giả danh Công an gửi file 'VNeID_CapNhat.apk' qua Zalo yêu cầu cài đặt. Nguy cơ là gì?", opts: ["Cập nhật nhanh hơn", "Chứa mã độc chiếm quyền điện thoại, đọc trộm OTP rút tiền", "Chỉ tốn dung lượng"], ans: 1, exp: "VNeID chỉ tải từ Google Play hoặc App Store, tuyệt đối không cài qua file .apk." },
        { scene: "gov_safe", q: "3. Biểu tượng nào cho biết kết nối trang web đang được mã hóa an toàn?", opts: ["Chữ 'Không bảo mật'", "Ổ khóa đi kèm địa chỉ https://", "Địa chỉ http://"], ans: 1, exp: "HTTPS đảm bảo dữ liệu truyền giữa máy bạn và máy chủ được mã hóa." },
        { scene: "wifi_trap", q: "4. Wi-Fi sân bay yêu cầu 'Đăng nhập bằng mật khẩu Facebook để dùng mạng miễn phí'. Đây là bẫy gì?", opts: ["Khuyến mãi sân bay", "Trang chào giả mạo (Captive Portal) đánh cắp mật khẩu", "Tính năng bảo vệ"], ans: 1, exp: "Không bao giờ nhập mật khẩu mạng xã hội thật vào trang chào Wi-Fi công cộng." },
        { scene: "phish_url", q: "5. Email tiêu đề '[KHẨN CẤP] Tài khoản sẽ bị xóa sau 2 giờ nếu không bấm link' dùng thủ thuật gì?", opts: ["Tạo áp lực thời gian & nỗi sợ để nạn nhân hoảng loạn bấm nhầm", "Hỗ trợ khách hàng", "Kiểm tra tốc độ mạng"], ans: 0, exp: "Social Engineering luôn đánh vào sự vội vàng và lo sợ của nạn nhân." },
        { scene: "gov_safe", q: "6. Đâu là cổng thông tin chính thức của cơ quan nhà nước Việt Nam?", opts: ["https://dichvucong-chinhphu.com", "https://dichvucong.gov.vn", "http://dichvucong.xyz"], ans: 1, exp: "Tên miền .gov.vn được cấp độc quyền cho cơ quan nhà nước Việt Nam." },
        { scene: "password_sec", q: "7. Khi bật 2FA, phương thức nhận mã nào an toàn hơn?", opts: ["Tin nhắn SMS", "Ứng dụng tạo mã như Google Authenticator", "Ghi ra giấy dán lên màn hình"], ans: 1, exp: "Authenticator tạo mã offline mỗi 30 giây, tránh bị mã độc đọc trộm SMS." },
        { scene: "password_sec", q: "8. Vì sao không nên dùng chung 1 mật khẩu cho Gmail, Facebook và Ngân hàng?", opts: ["Khó nhớ", "Lộ 1 trang sẽ mất toàn bộ các tài khoản còn lại", "Trình duyệt cấm"], ans: 1, exp: "Dùng chung mật khẩu gây hiệu ứng domino khi một trang bị rò rỉ dữ liệu." },
        { scene: "phish_url", q: "9. Link rút gọn (bit.ly/...) từ người lạ kèm tin giật gân tiềm ẩn rủi ro gì?", opts: ["Che giấu địa chỉ web độc hại thực sự phía sau", "Tải trang nhanh hơn", "Tăng bảo mật"], ans: 0, exp: "Tin tặc dùng link rút gọn để giấu tên miền lừa đảo." },
        { scene: "pc_malware", q: "10. Lỡ nhập mật khẩu vào web giả, ngoài đổi mật khẩu ngay bạn cần làm thêm gì?", opts: ["Tắt màn hình đi ngủ", "Bấm 'Đăng xuất khỏi tất cả các thiết bị'", "Xóa lịch sử web"], ans: 1, exp: "Đăng xuất tất cả thiết bị giúp hủy ngay phiên đăng nhập kẻ xấu vừa chiếm được." }
    ],
    3: [
        { scene: "pc_malware", q: "1. Đã bật 2FA nhưng sau khi cài phần mềm crack, Facebook vẫn bị chiếm quyền mà không báo 2FA. Nguyên nhân?", opts: ["Lỗi nhà mạng", "Mã độc Infostealer đánh cắp trực tiếp Session Cookie trên trình duyệt", "Mật khẩu ngắn"], ans: 1, exp: "Session Cookie chứa trạng thái đã đăng nhập sẵn, cho phép vượt qua cả 2FA." },
        { scene: "wifi_trap", q: "2. Tấn công 'Evil Twin' trên Wi-Fi công cộng hoạt động thế nào?", opts: ["Lập Wi-Fi giả trùng tên phát sóng mạnh hơn để ép thiết bị kết nối vào", "Phá hỏng bộ phát Wi-Fi", "Đoán mật khẩu bằng tay"], ans: 0, exp: "Tin tặc dùng gói tin ngắt kết nối (Deauth) để đẩy nạn nhân sang trạm phát giả." },
        { scene: "password_sec", q: "3. Chỉ số Entropy của mật khẩu phụ thuộc vào 2 yếu tố nào?", opts: ["Tốc độ gõ phím", "Độ dài mật khẩu và kích thước tập ký tự sử dụng", "Địa chỉ IP"], ans: 1, exp: "Công thức Entropy E = L × log2(N)." },
        { scene: "pc_malware", q: "4. Kỹ thuật Credential Stuffing là gì?", opts: ["Thử tự động danh sách Email + Mật khẩu bị rò rỉ từ vụ lộ dữ liệu cũ lên nhiều web khác", "Gửi email rác", "Tấn công DDoS"], ans: 0, exp: "Khai thác thói quen dùng lại mật khẩu cũ của người dùng." },
        { scene: "pc_malware", q: "5. Vì sao Ransomware thường kích hoạt lúc 00h00 – 04h00 sáng?", opts: ["Mạng ban đêm rẻ", "Đội ngũ IT/SOC trực mỏng, kéo dài thời gian phát hiện", "Tường lửa tự tắt"], ans: 1, exp: "Giúp mã độc có đủ thời gian mã hóa dữ liệu trước khi bị cô lập." },
        { scene: "sms_apk", q: "6. Trên Android, file .apk độc hại xin quyền 'Accessibility (Trợ năng)' để làm gì?", opts: ["Đổi hình nền", "Đọc màn hình (kể cả OTP) và tự chạm chuyển tiền ngầm", "Tăng dung lượng pin"], ans: 1, exp: "Quyền Trợ năng cho phép quan sát và điều khiển giao diện thay người dùng." },
        { scene: "gov_safe", q: "7. HTTPS chống lại kiểu tấn công nghe lén nào trên Wi-Fi công cộng?", opts: ["Man-in-the-Middle (MitM)", "DDoS", "Phá hoại phần cứng"], ans: 0, exp: "Mã hóa TLS ngăn kẻ đứng giữa đọc trộm hoặc sửa gói tin." },
        { scene: "call", q: "8. Thu thập ngày sinh, biển số xe công khai trên mạng để dò mật khẩu gọi là gì?", opts: ["OSINT (Tình báo nguồn mở)", "E2EE", "Load Balancing"], ans: 0, exp: "OSINT tận dụng thông tin người dùng tự công khai." },
        { scene: "sms_apk", q: "9. Thứ tự xử lý 60s đầu khi cài nhầm file .apk độc hại?", opts: ["Khởi động lại máy", "Bật Chế độ Máy bay -> Tắt quyền Trợ năng & gỡ app -> Dùng máy sạch khóa thẻ", "Xóa lịch sử gọi"], ans: 1, exp: "Ngắt mạng ngay để cắt lệnh điều khiển từ xa (C&C)." },
        { scene: "gov_safe", q: "10. Vai trò của CyberGuard AI trong mô hình phòng vệ nhiều lớp?", opts: ["Thay tường lửa cứng", "Giám sát, cảnh báo sớm & huấn luyện nhận thức từ tầng người dùng", "Diệt virus nhân HĐH"], ans: 1, exp: "Chặn đứng hơn 70% cuộc tấn công bắt nguồn từ lỗi con người." }
    ]
};

// ================= 3. KHÓA TẦNG CHỐNG GIAN LẬN + XÁC THỰC ADMIN =================
const ADMIN_SECRET_PIN = "VKU2026";
const SIGN_SALT = "CG_VKU_SEC_2026_";

function computeSignature(lvl) {
    let hash = 0;
    const str = SIGN_SALT + String(lvl);
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return String(hash);
}

function loadVerifiedLevel() {
    const rawLvl = parseInt(localStorage.getItem('cg_lvl') || '1');
    const sig = localStorage.getItem('cg_sig') || '';
    if (rawLvl >= 1 && rawLvl <= 3 && computeSignature(rawLvl) === sig) return rawLvl;
    saveVerifiedLevel(1);
    return 1;
}

function saveVerifiedLevel(lvl) {
    const safeLvl = Math.min(3, Math.max(1, lvl));
    localStorage.setItem('cg_lvl', String(safeLvl));
    localStorage.setItem('cg_sig', computeSignature(safeLvl));
    unlockedLevel = safeLvl;
}

let unlockedLevel = loadVerifiedLevel();
let currentTier = 1, currentIdx = 0, score = 0, winStreak = 0, loseStreak = 0, aiTimer = null;

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && (e.key === 'L' || e.key === 'l')) {
        e.preventDefault();
        openAdminModal();
    }
});

function openAdminModal() {
    document.getElementById('adminAuthModal').style.display = 'flex';
    document.getElementById('adminPinInput').value = '';
    document.getElementById('adminActionsArea').style.display = 'none';
    document.getElementById('adminVerifyBtn').style.display = 'inline-block';
    document.getElementById('adminPinInput').focus();
}

function closeAdminModal() { document.getElementById('adminAuthModal').style.display = 'none'; }

function verifyAdminPin() {
    if (document.getElementById('adminPinInput').value.trim() === ADMIN_SECRET_PIN) {
        document.getElementById('adminActionsArea').style.display = 'block';
        document.getElementById('adminVerifyBtn').style.display = 'none';
    } else {
        alert("❌ Sai mã PIN quản trị!");
        closeAdminModal();
    }
}

function adminUnlockAll() { saveVerifiedLevel(3); updateTierCardsUI(); closeAdminModal(); showAiNarrator(true, "Đã mở khóa toàn bộ 3 Tầng (Admin)."); }
function adminRelockAll() { saveVerifiedLevel(1); updateTierCardsUI(); resetToTiers(); closeAdminModal(); showAiNarrator(false, "Đã khóa lại về Tầng 1."); }

function updateTierCardsUI() {
    unlockedLevel = loadVerifiedLevel();
    for (let t = 1; t <= 3; t++) {
        const card = document.getElementById(`cardTier${t}`);
        const status = document.getElementById(`statusTier${t}`);
        if (t <= unlockedLevel) {
            card.classList.remove('locked');
            status.className = 'unlock-banner';
            status.innerText = t === 1 ? '🔓 Sẵn sàng' : `🔓 Đã mở khóa Tầng ${t}`;
        } else {
            card.classList.add('locked');
            status.className = 'lock-banner';
            status.innerText = `🔒 Đã khóa • Cần ≥ 7/10 Tầng ${t - 1}`;
        }
    }
}

function tryStartTier(tier) {
    unlockedLevel = loadVerifiedLevel();
    if (tier > unlockedLevel) {
        showAiNarrator(false, `Tầng ${tier} đang khóa! Bạn phải vượt qua Tầng ${tier - 1} với số điểm ≥ 7/10.`);
        return;
    }
    currentTier = tier; currentIdx = 0; score = 0; winStreak = 0; loseStreak = 0;
    document.getElementById('tierSelector').style.display = 'none';
    document.getElementById('quizSummaryArea').style.display = 'none';
    document.getElementById('quizPlayArea').style.display = 'block';
    const names = { 1: '🟢 Tầng 1: Dễ', 2: '🟡 Tầng 2: Khá', 3: '🔴 Tầng 3: Khó' };
    document.getElementById('quizTierTitle').innerText = names[tier];
    renderQuestion();
}

function resetToTiers() {
    hideAiNarrator(); updateTierCardsUI();
    document.getElementById('quizPlayArea').style.display = 'none';
    document.getElementById('quizSummaryArea').style.display = 'none';
    document.getElementById('tierSelector').style.display = 'grid';
}

function renderQuestion() {
    hideAiNarrator();
    const list = questionBank[currentTier];
    const item = list[currentIdx];
    const scene = visualScenes[item.scene] || visualScenes.phish_url;

    document.getElementById('quizProgress').innerText = `Câu ${currentIdx + 1}/${list.length} | Điểm: ${score}`;
    document.getElementById('questionText').innerText = item.q;
    document.getElementById('nextQuestionBtn').style.display = 'none';

    document.getElementById('mockupDeviceLabel').innerText = scene.device;
    document.getElementById('mockupSignalLabel').innerText = scene.signal;
    document.getElementById('mockupSvgArt').innerHTML = scene.svg;
    document.getElementById('mockupCaptionText').innerText = scene.caption;
    document.getElementById('mockupTagContainer').innerHTML = `<span class="mockup-url-pill ${scene.safe ? 'safe-pill' : ''}">${scene.tag}</span>`;

    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    item.opts.forEach((optText, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = optText;
        btn.onclick = () => handleAnswer(i, btn);
        container.appendChild(btn);
    });
}

function handleAnswer(selectedIdx, btnEl) {
    const list = questionBank[currentTier];
    const item = list[currentIdx];
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);

    if (selectedIdx === item.ans) {
        score++; winStreak++; loseStreak = 0;
        btnEl.classList.add('correct');
        if (typeof confetti === 'function') confetti({ particleCount: 90, spread: 70, origin: { y: 0.65 } });
        showAiNarrator(true, (winStreak >= 3 ? `🔥 Chuỗi ${winStreak} câu đúng! ` : '') + item.exp);
    } else {
        loseStreak++; winStreak = 0;
        btnEl.classList.add('wrong');
        allBtns[item.ans].classList.add('correct');
        showAiNarrator(false, item.exp);
    }

    document.getElementById('quizProgress').innerText = `Câu ${currentIdx + 1}/${list.length} | Điểm: ${score}`;
    const nextBtn = document.getElementById('nextQuestionBtn');
    nextBtn.style.display = 'inline-block';
    nextBtn.innerText = (currentIdx === list.length - 1) ? '🏁 Xem Kết Quả' : 'Tiếp theo ➡️';
}

function showAiNarrator(isSuccess, explanation) {
    const box = document.getElementById('aiNarratorBox');
    const title = document.getElementById('aiNarratorTitle');
    if (aiTimer) clearTimeout(aiTimer);
    title.innerText = isSuccess ? '🎉 Chính xác!' : '⚠️ Lưu ý từ AI:';
    title.style.color = isSuccess ? 'var(--safe)' : 'var(--warn)';
    document.getElementById('aiNarratorText').innerText = explanation;
    box.classList.remove('leave'); box.classList.add('enter');
    aiTimer = setTimeout(hideAiNarrator, 6000);
}

function hideAiNarrator() {
    const box = document.getElementById('aiNarratorBox');
    box.classList.remove('enter'); box.classList.add('leave');
}

function nextQuestion() {
    if (currentIdx < questionBank[currentTier].length - 1) { currentIdx++; renderQuestion(); }
    else finishQuiz();
}

let gameRadar = null;
function finishQuiz() {
    hideAiNarrator();
    document.getElementById('quizPlayArea').style.display = 'none';
    document.getElementById('quizSummaryArea').style.display = 'block';

    const total = questionBank[currentTier].length;
    const pct = Math.round((score / total) * 100);
    const passed = (score >= 7);
    const nextTierBtn = document.getElementById('nextTierJumpBtn');

    document.getElementById('finalScoreText').innerText = `Tầng ${currentTier}: ${score}/${total} câu đúng (${pct}%)`;

    if (passed) {
        if (typeof confetti === 'function') confetti({ particleCount: 150, spread: 95, origin: { y: 0.6 } });
        document.getElementById('finalCertBadge').innerHTML = `<span class="badge b-safe">🏅 VƯỢT ẢI THÀNH CÔNG</span>`;
        if (currentTier < 3) {
            if (unlockedLevel < currentTier + 1) saveVerifiedLevel(currentTier + 1);
            document.getElementById('unlockNoticeText').innerText = `🔓 Đã mở khóa Tầng ${currentTier + 1}!`;
            nextTierBtn.style.display = 'inline-block';
        } else {
            document.getElementById('unlockNoticeText').innerText = `🏆 Hoàn thành trọn vẹn cả 3 Tầng!`;
            nextTierBtn.style.display = 'none';
        }
    } else {
        document.getElementById('finalCertBadge').innerHTML = `<span class="badge b-danger">🔒 CHƯA ĐỦ ĐIỂM MỞ KHÓA</span>`;
        document.getElementById('unlockNoticeText').innerText = `Cần đạt ≥ 7/10 câu đúng để mở tầng tiếp theo.`;
        nextTierBtn.style.display = 'none';
    }
    updateTierCardsUI();

    const ctx = document.getElementById('gameRadarChart').getContext('2d');
    if (gameRadar) gameRadar.destroy();
    gameRadar = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Lừa đảo', 'Wi-Fi', 'Tài khoản', 'Ứng cứu'],
            datasets: [{ label: `Tầng ${currentTier} (%)`, data: [pct, Math.min(100, pct + 5), Math.max(20, pct - 5), pct], backgroundColor: 'rgba(168, 85, 247, 0.25)', borderColor: '#a855f7' }]
        },
        options: { scales: { r: { min: 0, max: 100, ticks: { display: false } } } }
    });
}

function jumpNextUnlockedTier() { if (currentTier < 3 && unlockedLevel >= currentTier + 1) tryStartTier(currentTier + 1); }
updateTierCardsUI();

// ================= 4. CHATBOT AI STREAMING =================
let savedGeminiKey = localStorage.getItem('cyberguard_gemini_key') || '';

function toggleApiKeyPanel() {
    const p = document.getElementById('apiKeyPanel');
    p.style.display = (p.style.display === 'none') ? 'block' : 'none';
    if (savedGeminiKey) document.getElementById('geminiKeyInput').value = savedGeminiKey;
}

function saveGeminiKey() {
    savedGeminiKey = document.getElementById('geminiKeyInput').value.trim();
    localStorage.setItem('cyberguard_gemini_key', savedGeminiKey);
    document.getElementById('apiKeyPanel').style.display = 'none';
    appendChatMsg('ai', savedGeminiKey ? '✅ Đã lưu Gemini API Key.' : 'ℹ️ Đã chuyển về chế độ mặc định.');
}

function appendChatMsg(role, htmlText) {
    const chatBox = document.getElementById('aiChatBox');
    const div = document.createElement('div');
    div.className = role === 'user' ? 'msg msg-user' : 'msg msg-ai';
    div.innerHTML = htmlText;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
    return div;
}

function askQuick(q) { document.getElementById('chatInput').value = q; sendChat(); }

async function sendChat() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;

    appendChatMsg('user', text);
    input.value = '';

    const aiMsgDiv = appendChatMsg('ai', '<span style="opacity:0.6;">▌</span>');
    const chatBox = document.getElementById('aiChatBox');

    try {
        const res = await fetch('http://127.0.0.1:8000/api/chat-stream', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text })
        });
        if (res.ok && res.body) {
            const reader = res.body.getReader();
            const decoder = new TextDecoder('utf-8');
            let fullText = '';
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                fullText += decoder.decode(value, { stream: true });
                aiMsgDiv.innerHTML = fullText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>') + ' ▌';
                chatBox.scrollTop = chatBox.scrollHeight;
            }
            aiMsgDiv.innerHTML = fullText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
            return;
        }
    } catch (e) {}

    if (savedGeminiKey) {
        try {
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${encodeURIComponent(savedGeminiKey)}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: `Bạn là CyberGuard AI, cố vấn an ninh mạng. Trả lời ngắn gọn, sắc sảo bằng tiếng Việt:\n${text}` }] }],
                    generationConfig: { temperature: 0.8, thinkingConfig: { thinkingBudget: 0 } }
                })
            });
            const data = await res.json();
            const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
            if (reply) {
                aiMsgDiv.innerHTML = reply.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
                return;
            }
        } catch (e) {}
    }

    const offlineReply = generateIntelligentResponse(text);
    let idx = 0;
    const typeInterval = setInterval(() => {
        idx += 8;
        aiMsgDiv.innerHTML = offlineReply.slice(0, idx) + (idx < offlineReply.length ? ' ▌' : '');
        chatBox.scrollTop = chatBox.scrollHeight;
        if (idx >= offlineReply.length) {
            aiMsgDiv.innerHTML = offlineReply;
            clearInterval(typeInterval);
        }
    }, 16);
}

function generateIntelligentResponse(query) {
    const q = query.toLowerCase();
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    if (q.includes('http://') || q.includes('https://') || /\.(xyz|top|tk|club|apk|exe)\b/.test(q)) {
        if (q.includes('.apk') || q.includes('.exe')) return `🚨 <strong>Nguy hiểm cao:</strong> Tệp cài đặt trực tiếp (<code>.apk/.exe</code>) có thể xin quyền <em>Trợ năng</em> để đọc trộm OTP và rút tiền ngân hàng. Tuyệt đối không cài đặt!`;
        if (q.includes('http://') || /\.(xyz|top|tk|club)\b/.test(q)) return `⚠️ <strong>Dấu hiệu giả mạo:</strong> Dùng <code>http://</code> không mã hóa hoặc đuôi tên miền lạ thường thấy ở trang Phishing.`;
        return `🔍 Chưa thấy dấu hiệu độc hại phổ biến, nhưng hãy kiểm tra kỹ từng ký tự tên miền trước khi nhập mật khẩu/OTP.`;
    }
    if (q.includes('lỡ') || q.includes('vừa bấm') || q.includes('vừa tải') || q.includes('bị hack')) {
        return `<strong>Xử lý ngay trong 60s:</strong><br>1. Bật <b>Chế độ Máy bay</b> để ngắt kết nối điều khiển.<br>2. Dùng thiết bị sạch đổi mật khẩu & bấm <b>"Đăng xuất tất cả thiết bị"</b>.<br>3. Gọi hotline ngân hàng khóa thẻ nếu đã nhập OTP.`;
    }
    if (q.includes('cookie') || q.includes('2fa')) {
        return `Mã độc <strong>Infostealer</strong> (ẩn trong phần mềm crack/extension lạ) có thể đánh cắp <em>Session Cookie</em> trên trình duyệt, giúp tin tặc vào thẳng tài khoản mà không cần mật khẩu hay mã 2FA.`;
    }
    if (q.includes('deepfake') || q.includes('video')) {
        return `Cuộc gọi <strong>Deepfake</strong> thường chỉ kéo dài 3–5 giây, hình ảnh mờ giật rồi tắt, sau đó nhắn tin mượn tiền vào tài khoản người lạ. Luôn gọi lại qua số di động thông thường để xác minh.`;
    }
    if (q.includes('wifi') || q.includes('wi-fi')) {
        return `Tránh đăng nhập mạng xã hội vào trang chào Wi-Fi miễn phí (bẫy <em>Evil Twin</em>). Khi giao dịch ngân hàng bên ngoài, hãy tắt Wi-Fi và dùng 4G/5G cá nhân.`;
    }
    return pick([
        `Về vấn đề <em>"${query}"</em>: bạn hãy cho biết rõ hơn tình huống đang gặp trên điện thoại, máy tính hay mạng xã hội để mình đưa ra hướng xử lý chính xác nhé!`,
        `Để bảo vệ an toàn cho tình huống này, nguyên tắc cốt lõi là <strong>xác minh danh tính nơi gửi qua kênh độc lập</strong> và không cấp quyền nhạy cảm cho ứng dụng lạ.`
    ]);
}

// ================= 5. SIDEBAR & ĐỒNG BỘ SÁNG/ĐÊM =================
function toggleSidebar() {
    if (window.innerWidth <= 768) document.body.classList.toggle('mobile-menu-open');
    else document.body.classList.toggle('sidebar-collapsed');
}

let demoOverride = null;
function toggleDemoSim() {
    demoOverride = (demoOverride === null) ? !(new Date().getHours() >= 6 && new Date().getHours() < 18) : null;
    syncSolarDefenseMode();
    closeAdminModal();
}

function syncSolarDefenseMode() {
    const now = new Date();
    const h = now.getHours();
    const timeStr = now.toLocaleTimeString('vi-VN');
    document.getElementById('headerLiveClock').innerText = timeStr;
    document.getElementById('cyberClock').innerText = timeStr;

    const isDay = (demoOverride !== null) ? demoOverride : (h >= 6 && h < 18);
    const pill = document.getElementById('welcomeStatusPill');
    const miniIcon = document.getElementById('headerMiniIcon');
    const topModeTag = document.getElementById('topModeTag');

    if (isDay) {
        document.body.classList.add('day-theme');
        pill.innerText = `☀️ ${timeStr} • Chế độ Ban Ngày`;
        miniIcon.innerText = '☀️';
        topModeTag.className = 'badge b-warn';
        topModeTag.innerText = '☀️ Ban Ngày';
    } else {
        document.body.classList.remove('day-theme');
        pill.innerText = `🛡️ ${timeStr} • Phòng Thủ Ban Đêm`;
        miniIcon.innerText = '🛡️';
        topModeTag.className = 'badge b-safe';
        topModeTag.innerText = '🛡️ Ban Đêm';
    }

    const badge = document.getElementById('threatWindowBadge');
    const desc = document.getElementById('threatWindowDesc');
    if ((h >= 11 && h <= 13) || (h >= 20 && h <= 23)) {
        badge.className = 'badge b-danger';
        badge.innerText = '🚨 CAO ĐIỂM PHISHING / DEEPFAKE';
        desc.innerText = 'Khung giờ nghỉ trưa / tối muộn dễ mất cảnh giác trước tin nhắn giả mạo.';
    } else if (h >= 0 && h < 4) {
        badge.className = 'badge b-danger';
        badge.innerText = '🚨 CAO ĐIỂM RANSOMWARE (00h–04h)';
        desc.innerText = 'Tin tặc thường kích hoạt mã độc mã hóa dữ liệu vào đêm khuya.';
    } else {
        badge.className = 'badge b-safe';
        badge.innerText = '🛡️ TRẠNG THÁI BÌNH THƯỜNG';
        desc.innerText = 'Duy trì thói quen kiểm tra kỹ link trước khi bấm và bật 2FA.';
    }
}
setInterval(syncSolarDefenseMode, 1000);
syncSolarDefenseMode();

// ================= 6. CÁC TIỆN ÍCH CÒN LẠI =================
function startSystem() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';
    const isHttps = window.location.protocol === 'https:';
    document.getElementById('protocolStatus').innerHTML = isHttps ? '<span style="color:var(--safe);">HTTPS (An toàn)</span>' : '<span style="color:var(--warn);">HTTP / Local</span>';
}
function goWelcome() { hideAiNarrator(); document.getElementById('mainApp').style.display = 'none'; document.getElementById('welcomeScreen').style.display = 'flex'; }
function switchTab(tabId, btn) {
    hideAiNarrator(); document.body.classList.remove('mobile-menu-open');
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.add('active'); btn.classList.add('active');
}
function jumpToSos() { switchTab('sosAiTab', document.querySelectorAll('.sidebar-item')[1]); }

function runEmergencyWizard() {
    const val = document.getElementById('sosScenario').value;
    const guides = {
        apk: `<ol style="margin-left:18px;"><li><b>0–15s:</b> Bật ngay <b>Chế độ Máy bay</b>.</li><li><b>15–30s:</b> Tắt quyền <i>Trợ năng</i> và gỡ app lạ.</li><li><b>30–60s:</b> Dùng máy sạch gọi ngân hàng khóa thẻ.</li></ol>`,
        phish_pass: `<ol style="margin-left:18px;"><li><b>0–20s:</b> Đổi mật khẩu trên thiết bị sạch.</li><li><b>20–40s:</b> Bấm <b>"Đăng xuất khỏi tất cả thiết bị"</b>.</li><li><b>40–60s:</b> Bật 2FA bằng Google Authenticator.</li></ol>`,
        deepfake_money: `<ol style="margin-left:18px;"><li><b>0–30s:</b> Gọi hotline ngân hàng yêu cầu phong tỏa giao dịch.</li><li><b>30–60s:</b> Lưu bằng chứng & trình báo Công an.</li></ol>`,
        wifi_hack: `<ol style="margin-left:18px;"><li><b>0–20s:</b> Ngắt Wi-Fi, chuyển sang 4G/5G.</li><li><b>20–60s:</b> Thu hồi phiên đăng nhập cũ & đổi mật khẩu.</li></ol>`
    };
    document.getElementById('sosStepsBox').innerHTML = guides[val];
}

function analyzeWifi() {
    const loc = document.getElementById('wifiLocation').value;
    const vpn = document.getElementById('vpnStatus').value;
    const box = document.getElementById('wifiResult');
    if (loc === 'home') box.innerHTML = `<span class="badge b-safe">AN TOÀN</span> Mạng cá nhân WPA2/WPA3.`;
    else if (vpn === 'yes') box.innerHTML = `<span class="badge b-safe">AN TOÀN</span> Đã mã hóa qua VPN.`;
    else if (loc === 'captive') box.innerHTML = `<span class="badge b-danger">NGUY HIỂM</span> Bẫy Evil Twin — không nhập mật khẩu mạng xã hội!`;
    else box.innerHTML = `<span class="badge b-warn">CẢNH BÁO</span> Không giao dịch ngân hàng khi chưa bật VPN.`;
}

function loadSample(id) {
    const input = document.getElementById('phishingInput');
    if (id === 1) input.value = "Tai khoan VCB bi khoa, xac thuc ngay tai http://vcb-baomat24h.xyz";
    if (id === 2) input.value = "Cap nhat VNeID muc 2 qua link https://dichvucong.top/VNeID.apk";
    if (id === 3) input.value = "Xem lich thi chinh thuc tai https://daotao.vku.udn.vn";
}
function scanPhishing() {
    const text = document.getElementById('phishingInput').value.trim();
    const box = document.getElementById('phishingResult');
    if (!text) return;
    let score = 0, reasons = [];
    const lower = text.toLowerCase();
    if (lower.includes('http://')) { score += 35; reasons.push("Dùng <b>http://</b> không mã hóa."); }
    if (lower.includes('.apk') || lower.includes('.exe')) { score += 50; reasons.push("Chứa tệp cài đặt <b>.apk/.exe</b>."); }
    if (/\.(xyz|top|club|info|vip|tk)\b/.test(lower)) { score += 35; reasons.push("Đuôi tên miền lạ (<i>.xyz, .top...</i>)."); }
    if (lower.includes('khóa') || lower.includes('khoa') || lower.includes('xác thực')) { score += 25; reasons.push("Ngôn từ thúc ép, hù dọa."); }
    if (lower.includes('.edu.vn') || lower.includes('.gov.vn')) score = Math.max(0, score - 40);

    if (score >= 50) box.innerHTML = `<span class="badge b-danger">🚨 NGUY HIỂM CAO</span><ul style="margin-left:18px;margin-top:4px;">${reasons.map(r=>`<li>${r}</li>`).join('')}</ul>`;
    else if (score >= 25) box.innerHTML = `<span class="badge b-warn">⚠️ ĐÁNG NGỜ</span><ul style="margin-left:18px;margin-top:4px;">${reasons.map(r=>`<li>${r}</li>`).join('')}</ul>`;
    else box.innerHTML = `<span class="badge b-safe">✅ AN TOÀN</span> Không phát hiện dấu hiệu giả mạo.`;
}

function checkPassword() {
    const pwd = document.getElementById('pwdInput').value;
    const box = document.getElementById('pwdResult');
    if (!pwd) return;
    let pool = 0;
    if (/[a-z]/.test(pwd)) pool += 26;
    if (/[A-Z]/.test(pwd)) pool += 26;
    if (/[0-9]/.test(pwd)) pool += 10;
    if (/[^a-zA-Z0-9]/.test(pwd)) pool += 32;
    const entropy = Math.round(pwd.length * Math.log2(pool || 1));
    if (entropy < 45) box.innerHTML = `<span class="badge b-danger">RẤT YẾU (${entropy} bits)</span> Bị bẻ khóa trong vài giây.`;
    else if (entropy < 70) box.innerHTML = `<span class="badge b-warn">TRUNG BÌNH (${entropy} bits)</span> Nên dùng ≥ 12 ký tự.`;
    else box.innerHTML = `<span class="badge b-safe">MẠNH (${entropy} bits)</span> Chống Brute-force tốt.`;
}
