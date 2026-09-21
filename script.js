/* ============================================================
   LLCIA — LLCC INFORMATION ASSISTANT
   Data model + rendering + chatbot logic
   NOTE: Course, organization, event, office, document, FAQ and
   calendar details below are the information supplied for this
   build. Replace sample descriptions, requirements, hours and
   contact details with LLCC's officially verified information
   before publishing.
============================================================ */

const DATA = {

    announcements: [
        "📢 Enrollment schedules are posted per year level — check the Registrar or ask LLCIA.",
        "🏆 Scholarship applications are reviewed every semester. Prepare your documents early.",
        "🏫 Campus Clash and department days are held throughout the school year — see the Events section."
    ],

    courses: [
        {
            code: "HM",
            name: "Hospitality Management",
            majors: [],
            category: "Business & Hospitality",
            duration: "4 years",
            summary: "Prepares students for careers in hotels, resorts, and food service operations.",
            careers: ["Hotel Operations Staff", "Food & Beverage Service", "Front Office / Guest Relations", "Events & Catering"],
            keywords: ["hm", "hospitality", "hospitality management", "hotel management"]
        },
        {
            code: "TM",
            name: "Tourism Management",
            majors: [],
            category: "Business & Hospitality",
            duration: "4 years",
            summary: "Focuses on travel, tour operations, and destination management.",
            careers: ["Tour Operations", "Travel Agency Staff", "Airline & Cruise Services", "Destination / Local Tourism Office"],
            keywords: ["tm", "tourism", "tourism management"]
        },
        {
            code: "BEED",
            name: "Bachelor of Elementary Education",
            majors: [],
            category: "Education",
            duration: "4 years",
            summary: "Prepares future teachers for the elementary education level.",
            careers: ["Elementary School Teacher", "Instructional Materials Development", "Educational Support Roles"],
            keywords: ["beed", "elementary education", "elementary teacher"]
        },
        {
            code: "EDUC",
            name: "Education (Secondary)",
            majors: ["English", "Filipino", "Social Studies (Soc-Stud)", "Mathematics"],
            category: "Education",
            duration: "4 years",
            summary: "Prepares future teachers for the secondary education level, with a choice of major.",
            careers: ["Secondary School Teacher", "Subject-Area Specialist", "Curriculum & Instructional Support"],
            keywords: ["educ", "education", "bsed", "secondary education", "teacher", "english major", "filipino major", "social studies", "soc-tud", "soc-stud", "math major", "mathematics major"]
        },
        {
            code: "BIT",
            name: "Bachelor of Industrial Technology",
            majors: ["Computer Technology", "Electronics"],
            category: "Technology",
            duration: "4 years",
            summary: "A technical-vocational degree with a choice of specialization.",
            careers: ["Computer Technician / Support", "Electronics Technician", "IT / Networking Support", "Technical Trainer"],
            keywords: ["bit", "industrial technology", "comptech", "computer technology", "electronics"]
        }
    ],

    organizations: [
        { code: "SCES", name: "Student Community Extension Services", category: "Civic & Service", summary: "Coordinates LLCC's community outreach and extension activities.", accent: "teal" },
        { code: "BCH", name: "Book Club Haven", category: "Special Interest", summary: "A reading and literary community for LLCC students.", accent: "gold" },
        { code: "LCW", name: "LCW", category: "Academic", summary: "Official LLCC student organization.", accent: "navy" },
        { code: "ROTC", name: "Reserve Officers' Training Corps", category: "Military / Civic", summary: "Military science training and ROTC-led campus activities.", accent: "rose" },
        { code: "SELECT", name: "SELECT", category: "Academic", summary: "Official LLCC student organization.", accent: "teal" },
        { code: "HOTEL", name: "HOTEL", category: "Academic", summary: "Organization for Hospitality Management students.", accent: "gold" },
        { code: "PI-THONS", name: "Pi-thons", category: "Academic", summary: "Organization for BIT / Computer Technology students.", accent: "navy" },
        { code: "ALLE", name: "Alle", category: "Special Interest", summary: "Official LLCC student organization.", accent: "rose" },
        { code: "SALAWIKAFIL", name: "Salawikafil", category: "Special Interest", summary: "Organization for Filipino language and culture.", accent: "teal" },
        { code: "SAGES", name: "Sages", category: "Academic", summary: "Organization for Education students.", accent: "gold" }
    ],

    events: [
        { name: "Intramurals", term: "2nd Semester", summary: "School-wide sports competition between student groups.", accent: "rose" },
        { name: "ROTC Events", term: "Year-Round", summary: "Activities and formations organized by the ROTC unit.", accent: "navy" },
        { name: "IT Days", term: "1st Semester", summary: "Celebration week for Information Technology / BIT students.", accent: "teal" },
        { name: "Educ Days", term: "1st Semester", summary: "Celebration week for Education students.", accent: "gold" },
        { name: "HTM Days", term: "1st Semester", summary: "Celebration week for Hospitality & Tourism Management students.", accent: "rose" },
        { name: "ALCU (Sports)", term: "2nd Semester", summary: "Inter-school sports meet under ALCU.", accent: "navy" },
        { name: "Acquaintance Party", term: "1st Semester", summary: "Welcome social event for students.", accent: "teal" },
        { name: "Christmas Party", term: "1st Semester", summary: "Year-end holiday celebration.", accent: "gold" },
        { name: "Campus Clash", term: "2nd Semester", summary: "Inter-department competition and showdown.", accent: "rose" }
    ],

    offices: [
        {
            code: "registrar",
            name: "Registrar",
            icon: "📝",
            hours: "Mon–Fri, 8:00 AM – 5:00 PM",
            location: "Main Building, Ground Floor",
            summary: "Enrollment, academic records, transcripts, and official student documents.",
            keywords: ["registrar", "academic record", "records"]
        },
        {
            code: "clinic",
            name: "Clinic",
            icon: "🏥",
            hours: "Mon–Fri, 8:00 AM – 5:00 PM",
            location: "Main Building, Ground Floor",
            summary: "Basic health services and clinic-related student concerns.",
            keywords: ["clinic", "medical", "health", "nurse"]
        },
        {
            code: "soa",
            name: "SOA — Student Office Affairs",
            icon: "👥",
            hours: "Mon–Fri, 8:00 AM – 5:00 PM",
            location: "Main Building, 2nd Floor",
            summary: "Student affairs, discipline, organizations, and student-related concerns.",
            keywords: ["soa", "student office affairs", "student affairs"]
        },
        {
            code: "dean",
            name: "Dean's Office",
            icon: "🎓",
            hours: "Mon–Fri, 8:00 AM – 5:00 PM",
            location: "Main Building, 2nd Floor",
            summary: "Academic and department-specific concerns for your program.",
            keywords: ["dean", "dean's office", "department"]
        },
        {
            code: "library",
            name: "Library",
            icon: "📚",
            hours: "Mon–Fri, 8:00 AM – 5:00 PM",
            location: "Library Building",
            summary: "Books, references, research assistance, and library services.",
            keywords: ["library", "book", "borrow", "reference"]
        }
    ],

    documents: [
        {
            name: "Scholarship Papers",
            category: "Scholarship",
            office: "Registrar / Scholarship Office",
            keywords: ["scholarship", "financial assistance", "grant"],
            items: ["Scholarship Application Form", "Certificate of Grades", "Valid ID", "Certificate of Indigency / supporting document (if applicable)"]
        },
        {
            name: "Transferee Papers",
            category: "Admission",
            office: "Registrar",
            keywords: ["transferee", "transfer", "transfer student"],
            items: ["Transfer Credential / Honorable Dismissal", "Transcript of Records (from previous school)", "Certificate of Good Moral Character", "Valid ID"]
        },
        {
            name: "Enrollment Papers",
            category: "Enrollment",
            office: "Registrar",
            keywords: ["enrollment", "enrol", "enroll"],
            items: ["Enrollment Form", "Form 138 / Senior High School Card", "Certificate of Good Moral Character", "PSA Birth Certificate", "2x2 ID Pictures"]
        },
        {
            name: "Student Papers",
            category: "Registrar",
            office: "Registrar",
            keywords: ["student papers", "student records", "student document"],
            items: ["Student Identification Form", "Certificate of Registration", "Valid Student ID", "Recent 2x2 ID Picture"]
        },
        {
            name: "Requirements Papers",
            category: "Registrar",
            office: "Registrar",
            keywords: ["requirements", "requirement papers", "general requirements"],
            items: ["Fully Accomplished Requirement Form", "Valid ID", "Supporting document(s) as specified by the office"]
        },
        {
            name: "Transcript of Records",
            category: "Registrar",
            office: "Registrar",
            keywords: ["tor", "transcript"],
            items: ["Student ID", "Valid ID", "Transcript Request Form", "Supporting document if applicable"]
        },
        {
            name: "Graduation Requirements",
            category: "Graduation",
            office: "Registrar",
            keywords: ["graduation", "graduate"],
            items: ["Graduation Application", "Clearance", "Required school documents", "Other official requirements"]
        },
        {
            name: "Registrar Document Guide",
            category: "Registrar",
            office: "Registrar",
            keywords: ["registrar guide"],
            items: ["Valid ID", "Applicable request form", "Proof of payment (if required)"]
        },
        {
            name: "Enrollment Guide",
            category: "Enrollment",
            office: "Registrar",
            keywords: ["enrollment guide"],
            items: ["Enrollment checklist", "Valid ID", "Previous school records"]
        }
    ],

    faqs: [
        {
            question: "I'm having trouble with the student portal.",
            keywords: ["portal", "student portal", "login", "password"],
            answer: "Common student portal issues include forgotten passwords, login errors, or missing grades. Please report persistent portal problems to the Registrar or SOA."
        },
        {
            question: "Where do I request a Student ID?",
            keywords: ["student id", "id card", "lost id"],
            answer: "Student IDs are processed through the Registrar. Bring a valid government ID and proof of enrollment. Report a lost ID to SOA as well."
        },
        {
            question: "How do I add or drop a subject?",
            keywords: ["add subject", "drop subject", "change schedule", "adding", "dropping"],
            answer: "Adding or dropping subjects is coursed through the Registrar within the official add/drop period. Ask your Dean's Office first for adviser approval."
        },
        {
            question: "Is cross-enrollment allowed?",
            keywords: ["cross enroll", "cross-enrollment"],
            answer: "Cross-enrollment requests are evaluated by the Registrar together with your Dean's Office. Bring a permit request letter and your Certificate of Registration."
        },
        {
            question: "Where do I pay school fees?",
            keywords: ["pay", "tuition", "fees", "payment"],
            answer: "Payments are coursed through the designated LLCC cashier/finance window. Ask the Registrar for the current payment schedule and channels."
        },
        {
            question: "What do I do if I lose a school document?",
            keywords: ["lost document", "lost form", "lost requirement"],
            answer: "Report a lost school document to the Registrar. You may be asked to execute an affidavit of loss and request a replacement or certified copy."
        }
    ],

    calendar: [
        { label: "Enrollment Period", detail: "Sample schedule — confirm exact dates with the Registrar." },
        { label: "Start of Classes", detail: "Sample schedule — confirm exact dates with the Registrar." },
        { label: "Midterm Examinations", detail: "Sample schedule — confirm exact dates with the Registrar." },
        { label: "Final Examinations", detail: "Sample schedule — confirm exact dates with the Registrar." },
        { label: "Intramurals / Campus Events Week", detail: "See the Events section for the list of activities." },
        { label: "Graduation", detail: "Sample schedule — confirm exact dates with the Registrar." }
    ]
};

let activeCourseFilter = "All";
let activeOrgFilter = "All";
let activeEventFilter = "All";
let activeDocFilter = "All";

/* ============================================================
   INIT
============================================================ */

document.addEventListener("DOMContentLoaded", function () {
    renderAnnouncements();
    renderFilters();
    renderCourses();
    renderOrganizations();
    renderEvents();
    renderOffices();
    renderDocuments();
    renderFaqs();
    renderCalendar();
    setupNavHighlight();
    displayAdminRequirements();
});

/* ============================================================
   ANNOUNCEMENT BANNER
============================================================ */

let announcementIndex = 0;
let announcementTimer = null;

function renderAnnouncements() {

    const banner = document.getElementById("announcementBanner");
    if (!banner || DATA.announcements.length === 0) return;

    banner.innerHTML = `
        <span id="announcementText">${DATA.announcements[0]}</span>
        <button class="banner-close" onclick="dismissAnnouncements()" aria-label="Dismiss announcements">×</button>
    `;

    announcementTimer = setInterval(function () {

        announcementIndex = (announcementIndex + 1) % DATA.announcements.length;

        const textEl = document.getElementById("announcementText");
        if (textEl) {
            textEl.innerText = DATA.announcements[announcementIndex];
        }

    }, 6000);
}

function dismissAnnouncements() {

    const banner = document.getElementById("announcementBanner");
    if (banner) banner.classList.add("hidden");

    if (announcementTimer) {
        clearInterval(announcementTimer);
    }
}

/* ============================================================
   NAV SCROLL HIGHLIGHT
============================================================ */

function setupNavHighlight() {

    const links = document.querySelectorAll("nav a");
    const sections = [];

    links.forEach(function (link) {
        const id = link.getAttribute("href").replace("#", "");
        const el = document.getElementById(id);
        if (el) {
            sections.push({ id: id, el: el, link: link });
        }
    });

    if (sections.length === 0) {
        return;
    }

    window.addEventListener("scroll", function () {

        let current = sections[0].id;

        sections.forEach(function (s) {
            const rect = s.el.getBoundingClientRect();
            if (rect.top <= 120) {
                current = s.id;
            }
        });

        links.forEach(function (link) {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + current
            );
        });
    });
}

/* ============================================================
   FILTER CHIPS
============================================================ */

function renderFilters() {

    buildFilterRow("courseFilters", uniqueValues(DATA.courses, "category"), activeCourseFilter, function (val) {
        activeCourseFilter = val;
        renderCourses();
        renderFilters();
    });

    buildFilterRow("orgFilters", uniqueValues(DATA.organizations, "category"), activeOrgFilter, function (val) {
        activeOrgFilter = val;
        renderOrganizations();
        renderFilters();
    });

    buildFilterRow("eventFilters", uniqueValues(DATA.events, "term"), activeEventFilter, function (val) {
        activeEventFilter = val;
        renderEvents();
        renderFilters();
    });

    buildFilterRow("documentFilters", uniqueValues(DATA.documents, "category"), activeDocFilter, function (val) {
        activeDocFilter = val;
        renderDocuments();
        renderFilters();
    });
}

function uniqueValues(list, field) {
    const values = list.map(function (item) { return item[field]; });
    return ["All"].concat(Array.from(new Set(values)));
}

function buildFilterRow(containerId, values, activeValue, onSelect) {

    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    values.forEach(function (val) {

        const chip = document.createElement("span");
        chip.className = "filter-chip" + (val === activeValue ? " active" : "");
        chip.innerText = val;
        chip.onclick = function () { onSelect(val); };

        container.appendChild(chip);
    });
}

/* ============================================================
   RENDER: COURSES
============================================================ */

function renderCourses() {

    const grid = document.getElementById("coursesGrid");
    if (!grid) return;

    grid.innerHTML = "";

    const list = DATA.courses.filter(function (c) {
        return activeCourseFilter === "All" || c.category === activeCourseFilter;
    });

    list.forEach(function (course, i) {

        const majorsHTML = course.majors.length
            ? "<ul>" + course.majors.map(function (m) { return "<li>" + m + "</li>"; }).join("") + "</ul>"
            : "";

        const careersHTML = course.careers.map(function (c) { return "<li>" + c + "</li>"; }).join("");

        const detailsId = "courseDetails" + i;

        const card = document.createElement("div");
        card.className = "data-card course-card accent-gold";

        card.innerHTML = `
            <span class="code">${course.code}</span>
            <span class="tag">${course.category} • ${course.duration}</span>
            <h3>${course.name}</h3>
            <p>${course.summary}</p>
            ${majorsHTML}
            <div id="${detailsId}" class="course-more hidden">
                <p><b>Possible career paths:</b></p>
                <ul>${careersHTML}</ul>
            </div>
            <div class="btn-row">
                <button class="action-btn btn-outline" onclick="toggleCourseDetails('${detailsId}', this)">View Details</button>
                <button class="action-btn" onclick="askBot('Tell me about ${course.name}')">Ask LLCIA</button>
            </div>
        `;

        grid.appendChild(card);
    });
}

function toggleCourseDetails(id, btn) {

    const el = document.getElementById(id);
    if (!el) return;

    const isHidden = el.classList.toggle("hidden");
    btn.innerText = isHidden ? "View Details" : "Hide Details";
}

/* ============================================================
   RENDER: ORGANIZATIONS
============================================================ */

function renderOrganizations() {

    const grid = document.getElementById("orgsGrid");
    if (!grid) return;

    grid.innerHTML = "";

    const list = DATA.organizations.filter(function (o) {
        return activeOrgFilter === "All" || o.category === activeOrgFilter;
    });

    list.forEach(function (org) {

        const card = document.createElement("div");
        card.className = "data-card accent-" + org.accent;

        card.innerHTML = `
            <span class="tag">${org.code}</span>
            <span class="tag">${org.category}</span>
            <h3>${org.name}</h3>
            <p>${org.summary}</p>
            <div class="btn-row">
                <button class="action-btn btn-outline" onclick="askBot('Tell me about ${org.code}')">Ask LLCIA</button>
            </div>
        `;

        grid.appendChild(card);
    });

    if (activeOrgFilter === "All") {
        const more = document.createElement("div");
        more.className = "data-card accent-navy";
        more.innerHTML = `
            <h3>...and more</h3>
            <p>LLCC is home to additional recognized student organizations. Ask LLCIA about a specific organization for details.</p>
        `;
        grid.appendChild(more);
    }
}

/* ============================================================
   RENDER: EVENTS
============================================================ */

function renderEvents() {

    const grid = document.getElementById("eventsGrid");
    if (!grid) return;

    grid.innerHTML = "";

    const list = DATA.events.filter(function (e) {
        return activeEventFilter === "All" || e.term === activeEventFilter;
    });

    list.forEach(function (ev) {

        const card = document.createElement("div");
        card.className = "data-card accent-" + ev.accent;

        card.innerHTML = `
            <span class="tag">${ev.term}</span>
            <h3>${ev.name}</h3>
            <p>${ev.summary}</p>
        `;

        grid.appendChild(card);
    });

    if (activeEventFilter === "All") {
        const more = document.createElement("div");
        more.className = "data-card accent-gold";
        more.innerHTML = `
            <h3>...and more</h3>
            <p>Additional department and campus-wide events are held throughout the year. Ask LLCIA for the latest schedule.</p>
        `;
        grid.appendChild(more);
    }
}

/* ============================================================
   RENDER: OFFICES
============================================================ */

function renderOffices() {

    const grid = document.getElementById("officesGrid");
    if (!grid) return;

    grid.innerHTML = "";

    DATA.offices.forEach(function (office) {

        const card = document.createElement("div");
        card.className = "info-card office-card";

        card.innerHTML = `
            <div class="icon">${office.icon}</div>
            <div>
                <h3>${office.name}</h3>
                <p>${office.summary}</p>
                <p class="office-meta">🕒 ${office.hours}</p>
                <p class="office-meta">📍 ${office.location}</p>
                <button class="action-btn" onclick="askBot('Where is the ${office.name}?')">Ask LLCIA</button>
            </div>
        `;

        grid.appendChild(card);
    });
}

/* ============================================================
   RENDER: DOCUMENTS
============================================================ */

function renderDocuments() {

    const grid = document.getElementById("documentsGrid");
    if (!grid) return;

    grid.innerHTML = "";

    const list = DATA.documents.filter(function (d) {
        return activeDocFilter === "All" || d.category === activeDocFilter;
    });

    list.forEach(function (doc) {

        const card = document.createElement("div");
        card.className = "document-card";

        card.innerHTML = `
            <span class="tag">${doc.category}</span>
            <h3>${doc.name}</h3>
            <p>Office: ${doc.office}</p>
            <div class="btn-row">
                <button class="action-btn" onclick='showChecklistFor("${doc.name.replace(/"/g, "")}")'>📋 Checklist</button>
                <button class="action-btn print-btn" onclick='printDocument("${doc.name.replace(/"/g, "")}")'>🖨️ View / Print</button>
            </div>
        `;

        grid.appendChild(card);
    });
}

/* ============================================================
   RENDER: FAQ (accordion)
============================================================ */

function renderFaqs() {

    const list = document.getElementById("faqList");
    if (!list) return;

    list.innerHTML = "";

    DATA.faqs.forEach(function (faq, index) {

        const item = document.createElement("div");
        item.className = "faq-item";

        item.innerHTML = `
            <button class="faq-question" onclick="toggleFaq(${index})">
                <span>${faq.question}</span>
                <span id="faqIcon${index}" class="faq-icon">+</span>
            </button>
            <div id="faqAnswer${index}" class="faq-answer hidden">
                <p>${faq.answer}</p>
                <button class="action-btn btn-outline" onclick="askBot('${faq.question.replace(/'/g, "")}')">Ask LLCIA more</button>
            </div>
        `;

        list.appendChild(item);
    });
}

function toggleFaq(index) {

    const answer = document.getElementById("faqAnswer" + index);
    const icon = document.getElementById("faqIcon" + index);
    if (!answer) return;

    const isHidden = answer.classList.toggle("hidden");
    icon.innerText = isHidden ? "+" : "–";
}

/* ============================================================
   RENDER: ACADEMIC CALENDAR
============================================================ */

function renderCalendar() {

    const list = document.getElementById("calendarList");
    if (!list) return;

    list.innerHTML = "";

    DATA.calendar.forEach(function (item) {

        const row = document.createElement("div");
        row.className = "calendar-item";

        row.innerHTML = `
            <div class="calendar-dot"></div>
            <div>
                <h3>${item.label}</h3>
                <p>${item.detail}</p>
            </div>
        `;

        list.appendChild(row);
    });
}

/* ============================================================
   HERO SEARCH  →  jumps to Explore + runs search
============================================================ */

function searchInformation() {

    const query = document.getElementById("searchInput").value.trim();

    document.getElementById("explore").scrollIntoView({ behavior: "smooth" });

    const exploreInput = document.getElementById("exploreInput");
    exploreInput.value = query;

    exploreInformation();
}

/* ============================================================
   EXPLORE / LIVE SEARCH
============================================================ */

function buildSearchIndex() {

    const index = [];

    DATA.courses.forEach(function (c) {
        index.push({
            title: c.code + " — " + c.name,
            desc: c.summary + (c.majors.length ? " Majors: " + c.majors.join(", ") + "." : ""),
            icon: "🎓",
            terms: [c.code, c.name].concat(c.keywords, c.majors)
        });
    });

    DATA.organizations.forEach(function (o) {
        index.push({
            title: o.code + " — " + o.name,
            desc: o.summary,
            icon: "👥",
            terms: [o.code, o.name]
        });
    });

    DATA.events.forEach(function (e) {
        index.push({
            title: e.name,
            desc: e.summary,
            icon: "📅",
            terms: [e.name]
        });
    });

    DATA.offices.forEach(function (o) {
        index.push({
            title: o.name,
            desc: o.summary,
            icon: o.icon,
            terms: [o.name].concat(o.keywords)
        });
    });

    DATA.documents.forEach(function (d) {
        index.push({
            title: d.name,
            desc: "Office: " + d.office,
            icon: "📄",
            terms: [d.name].concat(d.keywords)
        });
    });

    DATA.faqs.forEach(function (f) {
        index.push({
            title: f.question,
            desc: f.answer,
            icon: "❓",
            terms: [f.question].concat(f.keywords)
        });
    });

    return index;
}

const SEARCH_INDEX = buildSearchIndex();

function exploreInformation() {

    const query = document.getElementById("exploreInput").value.trim().toLowerCase();
    const results = document.getElementById("informationResults");

    results.innerHTML = "";

    if (query === "") {
        return;
    }

    const matches = SEARCH_INDEX.filter(function (entry) {
        return entry.terms.some(function (term) {
            return term.toLowerCase().includes(query);
        }) || entry.title.toLowerCase().includes(query) || entry.desc.toLowerCase().includes(query);
    });

    if (matches.length === 0) {
        results.innerHTML = '<p class="no-results">No matches found. Try a different keyword, or ask LLCIA directly.</p>';
        return;
    }

    matches.forEach(function (entry) {

        const card = document.createElement("div");
        card.className = "info-card";

        card.innerHTML = `
            <div class="icon">${entry.icon}</div>
            <h3>${entry.title}</h3>
            <p>${entry.desc}</p>
        `;

        results.appendChild(card);
    });
}

/* ============================================================
   QUICK ACCESS SHORTCUTS (home cards)
============================================================ */

function showPrograms() {
    document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
}

function showAdmission() {
    document.getElementById("admission").scrollIntoView({ behavior: "smooth" });
}

function showDocuments() {
    document.getElementById("documents").scrollIntoView({ behavior: "smooth" });
}

function showScholarship() {
    openChat();
    askBot("What are the scholarship requirements?");
}

function showRegistrar() {
    openChat();
    askBot("What does the Registrar do?");
}

function showCampus() {
    document.getElementById("campus").scrollIntoView({ behavior: "smooth" });
}

/* ============================================================
   CAMPUS MAP
============================================================ */

const BUILDING_INFO = {
    "Main Building": "Houses classrooms, faculty offices, and the administration area.",
    "Computer Laboratory": "Computer laboratories used for IT, Computer Technology, and related classes.",
    "Registrar": "Handles enrollment, records, and official student documents.",
    "Library": "Books, references, and study areas for students.",
    "Gymnasium": "Venue for sports, intramurals, and large school events."
};

let selectedBuilding = "";

function showBuilding(name) {

    selectedBuilding = name;

    document.getElementById("buildingName").innerText = name;
    document.getElementById("buildingDescription").innerText =
        BUILDING_INFO[name] || "Sample building description — replace with official campus information.";
}

function askAboutBuilding() {

    if (!selectedBuilding) {
        openChat();
        askBot("Tell me about the campus buildings.");
        return;
    }

    openChat();
    askBot("Tell me about the " + selectedBuilding);
}

/* ============================================================
   CHATBOT — OPEN / CLOSE / CLEAR
============================================================ */

function openChat() {
    document.getElementById("chatbot").classList.add("active");
    document.getElementById("chatInput").focus();
}

function closeChat() {
    document.getElementById("chatbot").classList.remove("active");
}

function clearChat() {

    const chatBox = document.getElementById("chatMessages");

    chatBox.innerHTML = `
        <div class="bot-message">
            👋 Hi again! Ask me about courses, admission, organizations, events, offices, or documents.
        </div>
    `;

    renderSuggestions(["What courses are available?", "What are the offices?", "What are the enrollment requirements?", "What organizations are available?"]);
}

function askBot(question) {
    openChat();
    document.getElementById("chatInput").value = question;
    sendMessage();
}

/* ============================================================
   CHATBOT — SEND / RECEIVE
============================================================ */

function sendMessage() {

    const input = document.getElementById("chatInput");
    const message = input.value.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user-message");
    input.value = "";

    showTyping();

    setTimeout(function () {

        hideTyping();

        const result = getBotResponse(message);
        addMessage(result.html, "bot-message");
        renderSuggestions(result.suggestions);

    }, 500);
}

function enterChat(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function addMessage(message, className) {

    const chatBox = document.getElementById("chatMessages");
    const div = document.createElement("div");

    div.className = className;
    div.innerHTML = message;

    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function showTyping() {

    const chatBox = document.getElementById("chatMessages");
    const div = document.createElement("div");

    div.className = "bot-message typing-indicator";
    div.id = "typingIndicator";
    div.innerHTML = "<span></span><span></span><span></span>";

    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function hideTyping() {

    const el = document.getElementById("typingIndicator");
    if (el) el.remove();
}

function renderSuggestions(list) {

    const container = document.getElementById("chatSuggestions");
    if (!container) return;

    container.innerHTML = "";

    (list || []).slice(0, 4).forEach(function (text) {

        const chip = document.createElement("span");
        chip.className = "chip";
        chip.innerText = text;
        chip.onclick = function () { askBot(text); };

        container.appendChild(chip);
    });
}

/* ============================================================
   CHATBOT — RESPONSE ENGINE
   Returns { html, suggestions }
============================================================ */

function getBotResponse(question) {

    const q = question.toLowerCase();

    /* --- Document-related questions (checklist + print) --- */

    const docMatch = DATA.documents.find(function (d) {
        return d.keywords.some(function (k) { return q.includes(k); });
    });

    if (docMatch) {
        return {
            html: renderDocAnswer(docMatch),
            suggestions: ["View Registrar office info", "What are the enrollment requirements?", "What is the graduation requirement?"]
        };
    }

    /* --- Course questions --- */

    const courseMatch = DATA.courses.find(function (c) {
        return c.keywords.some(function (k) { return q.includes(k); })
            || q.includes(c.name.toLowerCase());
    });

    if (courseMatch) {
        return {
            html: renderCourseAnswer(courseMatch),
            suggestions: ["What courses are available?", "What are the admission requirements?", "Ask about student organizations"]
        };
    }

    if (q.includes("course") || q.includes("program") || q.includes("major")) {
        return {
            html: renderAllCoursesAnswer(),
            suggestions: DATA.courses.map(function (c) { return "Tell me about " + c.name; })
        };
    }

    /* --- Office questions --- */

    const officeMatch = DATA.offices.find(function (o) {
        return o.keywords.some(function (k) { return q.includes(k); });
    });

    if (officeMatch) {
        return {
            html: renderOfficeAnswer(officeMatch),
            suggestions: ["What are the offices?", "What documents do I need?"]
        };
    }

    if (q.includes("office") || (q.includes("where") && !q.includes("building"))) {
        return {
            html: renderAllOfficesAnswer(),
            suggestions: DATA.offices.map(function (o) { return "Where is the " + o.name + "?"; })
        };
    }

    /* --- Organization questions --- */

    const orgMatch = DATA.organizations.find(function (o) {
        return q.includes(o.code.toLowerCase()) || q.includes(o.name.toLowerCase());
    });

    if (orgMatch) {
        return {
            html: `👥 <b>${orgMatch.code} — ${orgMatch.name}</b><br><br>${orgMatch.summary}<br><br><b>Category:</b> ${orgMatch.category}`,
            suggestions: ["What organizations are available?", "What events are coming up?"]
        };
    }

    if (q.includes("organization") || q.includes("org ") || q.includes("orgs")) {
        return {
            html: renderAllOrgsAnswer(),
            suggestions: ["Tell me about SCES", "Tell me about ROTC", "What events are coming up?"]
        };
    }

    /* --- Event questions --- */

    const eventMatch = DATA.events.find(function (e) {
        return q.includes(e.name.toLowerCase());
    });

    if (eventMatch) {
        return {
            html: `📅 <b>${eventMatch.name}</b><br><br>${eventMatch.summary}<br><br><b>When:</b> ${eventMatch.term}`,
            suggestions: ["What events are coming up?", "What organizations are available?"]
        };
    }

    if (q.includes("event")) {
        return {
            html: renderAllEventsAnswer(),
            suggestions: ["Tell me about Intramurals", "Tell me about Campus Clash"]
        };
    }

    /* --- Campus building questions --- */

    const buildingMatch = Object.keys(BUILDING_INFO).find(function (b) {
        return q.includes(b.toLowerCase());
    });

    if (buildingMatch) {
        return {
            html: `🏫 <b>${buildingMatch}</b><br><br>${BUILDING_INFO[buildingMatch]}`,
            suggestions: ["What are the offices?", "What courses are available?"]
        };
    }

    /* --- Calendar questions --- */

    if (q.includes("calendar") || q.includes("schedule of classes") || q.includes("school year")) {
        return {
            html: renderCalendarAnswer(),
            suggestions: ["What are the enrollment requirements?", "What events are coming up?"]
        };
    }

    /* --- FAQ --- */

    const faqMatch = DATA.faqs.find(function (f) {
        return f.keywords.some(function (k) { return q.includes(k); });
    });

    if (faqMatch) {
        return {
            html: `<b>❓ ${faqMatch.question}</b><br><br>${faqMatch.answer}`,
            suggestions: ["What are the offices?", "What documents do I need?"]
        };
    }

    /* --- Greetings --- */

    if (q.includes("hello") || q.includes("hi ") || q === "hi" || q.includes("kumusta") || q.includes("kamusta")) {
        return {
            html: "👋 Hi! Ask me about courses, admission, organizations, events, offices, or documents.",
            suggestions: ["What courses are available?", "What are the offices?", "What organizations are available?"]
        };
    }

    /* --- Default --- */

    return {
        html: `
            🤖 <b>I can help you with:</b>
            <br><br>
            • Available courses and majors
            <br>
            • Admission and transferee requirements
            <br>
            • Enrollment and graduation requirements
            <br>
            • Scholarship information
            <br>
            • Student organizations
            <br>
            • School events
            <br>
            • LLCC offices
            <br>
            • Documents and forms
            <br>
            • Academic calendar
            <br><br>
            Please ask a specific LLCC question.
            <br><br>
            ⚠️ LLCIA does not access private student records.
        `,
        suggestions: ["What courses are available?", "What are the offices?", "What organizations are available?", "What events are coming up?"]
    };
}

function renderDocAnswer(doc) {

    const itemsHTML = doc.items.map(function (i) { return "☐ " + i; }).join("<br>");

    return `
        📄 <b>${doc.name}</b>
        <br><br>
        <b>Office:</b> ${doc.office}
        <br><br>
        <b>Prepare:</b>
        <br>
        ${itemsHTML}
        <br><br>
        <button class="action-btn" onclick='showChecklistFor("${doc.name}")'>📋 View Checklist</button>
        <button class="action-btn print-btn" onclick='printDocument("${doc.name}")'>🖨️ Print Form</button>
    `;
}

function renderCourseAnswer(course) {

    const majorsHTML = course.majors.length
        ? "<br><b>Majors:</b><br>" + course.majors.map(function (m) { return "&nbsp;&nbsp;• " + m; }).join("<br>")
        : "";

    const careersHTML = "<br><b>Possible careers:</b><br>" + course.careers.map(function (c) { return "&nbsp;&nbsp;• " + c; }).join("<br>");

    return `
        🎓 <b>${course.code} — ${course.name}</b>
        <br><br>
        ${course.summary}
        <br>
        <b>Duration:</b> ${course.duration}
        ${majorsHTML}
        ${careersHTML}
    `;
}

function renderAllCoursesAnswer() {

    const rows = DATA.courses.map(function (c) {
        let row = "• " + c.code + " - " + c.name;
        if (c.majors.length) {
            row += "<br>" + c.majors.map(function (m) { return "&nbsp;&nbsp;" + m; }).join("<br>");
        }
        return row;
    }).join("<br>");

    return `🎓 <b>Available Courses</b><br><br>${rows}<br><br>Ask about a specific course or major for more details.`;
}

function renderOfficeAnswer(office) {
    return `${office.icon} <b>${office.name}</b><br><br>${office.summary}<br><br>🕒 ${office.hours}<br>📍 ${office.location}`;
}

function renderAllOfficesAnswer() {

    const rows = DATA.offices.map(function (o) {
        return "• " + o.icon + " " + o.name;
    }).join("<br>");

    return `🏢 <b>LLCC Offices</b><br><br>${rows}<br><br>Tell me which office you need.`;
}

function renderAllOrgsAnswer() {

    const rows = DATA.organizations.map(function (o) {
        return "• " + o.code + " - " + o.name;
    }).join("<br>");

    return `👥 <b>Student Organizations</b><br><br>${rows}<br>• and more...<br><br>Ask about a specific organization for details.`;
}

function renderAllEventsAnswer() {

    const rows = DATA.events.map(function (e) {
        return "• " + e.name + " (" + e.term + ")";
    }).join("<br>");

    return `📅 <b>LLCC Events</b><br><br>${rows}<br>• and more...<br><br>Ask about a specific event for details.`;
}

function renderCalendarAnswer() {

    const rows = DATA.calendar.map(function (c) {
        return "• <b>" + c.label + "</b> — " + c.detail;
    }).join("<br>");

    return `🗓️ <b>Academic Calendar</b><br><br>${rows}`;
}

/* ============================================================
   CHECKLIST
============================================================ */

function showChecklistFor(docName) {

    const doc = DATA.documents.find(function (d) { return d.name === docName; });

    if (!doc) {
        return;
    }

    openChat();

    const itemsHTML = doc.items.map(function (i) { return "☐ " + i; }).join("<br>");

    addMessage(`
        <div class="checklist">
            <h3>📋 ${doc.name} Checklist</h3>
            <p>Prepare these documents before visiting the ${doc.office}.</p>
            <br>
            ${itemsHTML}
        </div>
    `, "bot-message");

    renderSuggestions(["Print this form", "What are the offices?", "What courses are available?"]);
}

/* ============================================================
   PRINT DOCUMENT
============================================================ */

function printDocument(documentName) {

    const doc = DATA.documents.find(function (d) { return d.name === documentName; });

    const printWindow = window.open("", "_blank");

    if (!printWindow) {
        alert("Please allow pop-ups in your browser.");
        return;
    }

    const itemsHTML = doc
        ? doc.items.map(function (i) {
            return `<div style="margin:6px 0;">&#9744; ${i}</div>`;
        }).join("")
        : "";

    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${documentName}</title>
            <style>
                body { font-family: Georgia, serif; padding: 50px; color: #1c2431; }
                h1 { text-align: center; letter-spacing: 2px; color: #102a46; }
                h2 { text-align: center; font-weight: normal; margin-bottom: 30px; }
                .box { border: 1px solid #102a46; border-radius: 6px; padding: 30px; margin-top: 20px; }
                .line { display: inline-block; width: 300px; border-bottom: 1px solid #1c2431; }
                .items { margin-top: 20px; border-top: 1px dashed #999; padding-top: 15px; }
                .footer-note { margin-top: 30px; font-size: 12px; color: #666; text-align: center; }
            </style>
        </head>
        <body>
            <h1>LLCC</h1>
            <h2>${documentName}</h2>
            <div class="box">
                Name: <span class="line"></span>
                <br><br>
                Student ID: <span class="line"></span>
                <br><br>
                Program: <span class="line"></span>
                <br><br>
                Date: <span class="line"></span>
                <br><br>
                Signature: <span class="line"></span>
                ${doc ? `<div class="items"><b>Requirements:</b>${itemsHTML}</div>` : ""}
            </div>
            <p class="footer-note">
                Sample form — please verify current official requirements with the ${doc ? doc.office : "appropriate LLCC office"}.
            </p>
        </body>
        </html>
    `);

    printWindow.document.close();

    printWindow.onload = function () {
        printWindow.print();
    };
}

/* ============================================================
   ADMIN — SAMPLE REQUIREMENT MANAGER (kept from original build)
============================================================ */

let requirements = [];

try {
    requirements = JSON.parse(localStorage.getItem("llciaRequirements")) || [];
} catch (error) {
    requirements = [];
}

function addRequirement() {

    const nameEl = document.getElementById("reqName");
    const officeEl = document.getElementById("reqOffice");
    const itemsEl = document.getElementById("reqItems");

    if (!nameEl || !officeEl || !itemsEl) {
        return;
    }

    const name = nameEl.value.trim();
    const office = officeEl.value;
    const itemsText = itemsEl.value.trim();

    if (name === "" || itemsText === "") {
        alert("Please complete all required fields.");
        return;
    }

    requirements.push({
        name: name,
        office: office,
        items: itemsText.split("\n").filter(function (item) { return item.trim() !== ""; })
    });

    saveRequirements();

    nameEl.value = "";
    itemsEl.value = "";

    displayAdminRequirements();

    alert("Requirement added successfully!");
}

function saveRequirements() {
    localStorage.setItem("llciaRequirements", JSON.stringify(requirements));
}

function displayAdminRequirements() {

    const list = document.getElementById("adminList");
    if (!list) return;

    list.innerHTML = "";

    requirements.forEach(function (req, index) {

        const div = document.createElement("div");
        div.className = "data-card accent-navy";
        div.style.marginTop = "15px";

        const itemsHTML = req.items.map(function (item) { return "☐ " + item; }).join("<br>");

        div.innerHTML = `
            <h3>${req.name}</h3>
            <p><b>Office:</b> ${req.office}</p>
            ${itemsHTML}
            <br><br>
            <button class="action-btn" onclick="deleteRequirement(${index})">Delete</button>
        `;

        list.appendChild(div);
    });
}

function deleteRequirement(index) {

    if (!confirm("Delete this requirement?")) {
        return;
    }

    requirements.splice(index, 1);
    saveRequirements();
    displayAdminRequirements();
}

