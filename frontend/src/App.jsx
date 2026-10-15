import { useState } from 'react'
import './App.css'

const statistics = [
  { value: '40+', label: 'Years of excellence' },
  { value: '8,000+', label: 'Students on campus' },
  { value: '100+', label: 'Recruiting companies' },
  { value: '25+', label: 'Countries represented' },
]

const quickLinks = [
  { number: '01', title: 'Academics', detail: 'Schools, programs and learning', href: '#academics' },
  { number: '02', title: 'Admissions', detail: 'Find your way to VIT', href: '#admissions' },
  { number: '03', title: 'Research', detail: 'Ideas that move society forward', href: '#research' },
  { number: '04', title: 'Campus life', detail: 'A community built to belong', href: '#campus-life' },
]

const announcements = [
  { category: 'Admissions', date: '18 SEP 2026', title: 'Applications open for the 2026–27 academic year', href: '#admissions' },
  { category: 'Academics', date: '12 SEP 2026', title: 'Academic calendar and important dates announced', href: '#academics' },
  { category: 'Research', date: '02 SEP 2026', title: 'VIT Pune innovation teams recognized at national forum', href: '#research' },
]

const events = [
  { day: '14', month: 'OCT', title: 'Campus Open Day', detail: 'Explore our campus and meet the VIT community', time: '10:00 AM · Main campus' },
  { day: '22', month: 'OCT', title: 'Research & Innovation Showcase', detail: 'Student projects, ideas and new possibilities', time: '2:00 PM · Innovation Centre' },
  { day: '05', month: 'NOV', title: 'New Student Orientation', detail: 'A warm welcome to your next chapter', time: '9:00 AM · Auditorium' },
]

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

const aboutNavigation = [
  ['History', 'history'],
  ['Vision & Mission', 'vision'],
  ['Director’s Message', 'director'],
  ['Accreditation', 'accreditation'],
  ['Rankings', 'rankings'],
  ['Infrastructure', 'infrastructure'],
  ['Campus', 'campus'],
]

const departments = [
  { name: 'Computer Engineering', slug: 'computer-engineering', detail: 'Computing systems, software and emerging technology.' },
  { name: 'Information Technology', slug: 'information-technology', detail: 'Digital infrastructure, data and connected services.' },
  { name: 'Electronics & Telecommunication', slug: 'electronics-telecommunication', detail: 'Electronics, communication systems and embedded design.' },
  { name: 'Instrumentation & Control', slug: 'instrumentation-control', detail: 'Measurement, automation and intelligent control.' },
  { name: 'Mechanical Engineering', slug: 'mechanical-engineering', detail: 'Design, materials, manufacturing and energy systems.' },
  { name: 'Civil Engineering', slug: 'civil-engineering', detail: 'Infrastructure, construction and the built environment.' },
]

const departmentSections = [
  ['About Department', 'about-department'],
  ['HOD', 'hod'],
  ['Faculty', 'faculty'],
  ['Courses', 'courses'],
  ['Laboratories', 'laboratories'],
  ['Research Areas', 'research-areas'],
  ['Timetable', 'timetable'],
  ['Syllabus', 'syllabus'],
  ['Achievements', 'achievements'],
  ['Student Activities', 'student-activities'],
]

const hodProfile = {
  name: 'Dr. Meera Kulkarni',
  designation: 'Professor & Head of Department',
  qualification: 'Ph.D., Computer Engineering',
  specialization: 'Distributed Systems & Software Architecture',
  experience: '22+ years experience',
  email: 'hod.comp@vitpune.edu',
  initials: 'MK',
}

const facultyMembers = [
  {
    name: 'Dr. Rajesh Patil',
    designation: 'Professor',
    qualification: 'Ph.D., Computer Science',
    specialization: 'Artificial Intelligence & Machine Learning',
    experience: '18 yrs experience',
    email: 'rajesh.patil@vitpune.edu',
    initials: 'RP',
  },
  {
    name: 'Dr. Sneha Deshmukh',
    designation: 'Associate Professor',
    qualification: 'Ph.D., Data Engineering',
    specialization: 'Data Science & Big Data Analytics',
    experience: '14 yrs experience',
    email: 'sneha.deshmukh@vitpune.edu',
    initials: 'SD',
  },
  {
    name: 'Prof. Amit Joshi',
    designation: 'Assistant Professor',
    qualification: 'M.Tech, Computer Engineering',
    specialization: 'Computer Networks & Cybersecurity',
    experience: '9 yrs experience',
    email: 'amit.joshi@vitpune.edu',
    initials: 'AJ',
  },
  {
    name: 'Prof. Priya Nair',
    designation: 'Assistant Professor',
    qualification: 'M.Tech, Software Engineering',
    specialization: 'Software Engineering & Cloud Computing',
    experience: '8 yrs experience',
    email: 'priya.nair@vitpune.edu',
    initials: 'PN',
  },
  {
    name: 'Dr. Vikram Singh',
    designation: 'Associate Professor',
    qualification: 'Ph.D., Embedded Systems',
    specialization: 'Operating Systems & IoT',
    experience: '12 yrs experience',
    email: 'vikram.singh@vitpune.edu',
    initials: 'VS',
  },
  {
    name: 'Prof. Kavita Rao',
    designation: 'Assistant Professor',
    qualification: 'M.E., Information Technology',
    specialization: 'Database Systems & Web Technologies',
    experience: '7 yrs experience',
    email: 'kavita.rao@vitpune.edu',
    initials: 'KR',
  },
]

function DepartmentsPage({ department }) {
  if (!department) {
    return (
      <main className="departments-page">
        <section className="departments-hero">
          <div><p className="eyebrow"><span className="eyebrow-line" /> LEARN BY BUILDING</p><h1>Departments that<br /><em>move ideas forward.</em></h1><p>Explore the academic communities where curiosity becomes capability and learning connects to the world beyond campus.</p></div>
          <div className="departments-hero-note"><strong>01—06</strong><span>ENGINEERING DISCIPLINES</span></div>
        </section>
        <section className="department-directory" aria-label="Departments">
          <div className="department-directory-heading"><div><p className="section-kicker">FIND YOUR FIELD</p><h2>Explore departments</h2></div><p>Choose a discipline to discover its learning, people and opportunities.</p></div>
          <div className="department-grid">
            {departments.map((item, index) => (
              <a className="department-card" href={`/departments/${item.slug}`} key={item.slug}>
                <span className="department-card-index">0{index + 1} / DEPARTMENT</span>
                <strong>{item.name}</strong>
                <span className="department-card-detail">{item.detail}</span>
                <span className="department-card-link">Explore department <Arrow diagonal /></span>
              </a>
            ))}
          </div>
        </section>
      </main>
    )
  }

  const isComputerEngineering = department.slug === 'computer-engineering'

  return (
    <main className="department-detail-page">
      <section className="department-detail-hero">
        <div className="department-detail-copy"><a className="back-link" href="/departments">← All departments</a><p className="eyebrow"><span className="eyebrow-line" /> DEPARTMENT OF {department.name.toUpperCase()}</p><h1>{department.name}<br /><em>Think. Design. Build.</em></h1><p>{isComputerEngineering ? 'Explore the foundations of computing and the technologies shaping how we live, work and connect.' : department.detail}</p><div className="hero-actions"><a className="button button-primary" href="#faculty">View faculty <Arrow /></a><a className="button button-text" href="#courses">View courses <Arrow diagonal /></a></div></div>
        <div className="department-detail-image" role="img" aria-label={`${department.name} students working in a campus laboratory`} />
      </section>

      <nav className="department-index" aria-label={`${department.name} sections`}>
        {departmentSections.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}
      </nav>

      <section className="department-about" id="about-department"><p className="section-kicker">ABOUT DEPARTMENT</p><h2>Knowledge with a<br /><em>practical edge.</em></h2><p>{isComputerEngineering ? 'The Computer Engineering department brings together computing fundamentals, software development and hands-on problem solving. Students learn to approach complex challenges with technical depth, creativity and responsibility.' : `${department.name} connects strong engineering fundamentals with applied learning. Students build disciplinary knowledge through coursework, projects and collaborative problem solving.`}</p><span className="department-established">VIT PUNE <i /> LEARN WITH PURPOSE</span></section>

      <section className="department-people">
        <article className="department-hod" id="hod"><p className="section-kicker">DEPARTMENT LEADERSHIP</p><h2>HOD</h2><p>Meet the Head of Department and connect with the team for academic guidance, department updates and student support.</p><div className="hod-card"><span className="faculty-avatar" aria-hidden="true">{hodProfile.initials}</span><div><strong>{hodProfile.name}</strong><small>{hodProfile.designation}</small><small>{hodProfile.qualification}</small><small>{hodProfile.specialization}</small><small>{hodProfile.experience} · {hodProfile.email}</small></div></div></article>
        <article className="department-faculty" id="faculty"><p className="section-kicker">PEOPLE WHO TEACH, GUIDE & INSPIRE</p><h2>Faculty</h2><p>Faculty members support learning through teaching, mentoring, project guidance and research. Department profiles and office hours are maintained by the institute.</p><div className="faculty-grid">{facultyMembers.map((member) => (<div className="faculty-card" key={member.email}><span className="faculty-avatar" aria-hidden="true">{member.initials}</span><strong>{member.name}</strong><span className="faculty-designation">{member.designation}</span><span className="faculty-meta">{member.qualification}</span><span className="faculty-meta">{member.specialization}</span><span className="faculty-meta">{member.experience}</span><a className="faculty-email" href={`mailto:${member.email}`}>{member.email}</a></div>))}</div></article>
      </section>

      <section className="department-courses" id="courses"><div className="department-courses-heading"><p className="section-kicker">LEARN THE FOUNDATIONS. EXPLORE WHAT’S NEXT.</p><h2>Courses</h2><p>{isComputerEngineering ? 'Coursework spans core computing concepts, software development and emerging technologies. Refer to the current syllabus for the official course structure.' : 'Coursework combines foundational concepts, discipline-specific study and applied projects. Refer to the current syllabus for the official course structure.'}</p></div><div className="course-topics">{(isComputerEngineering ? ['Data structures & algorithms', 'Operating systems', 'Database systems', 'Computer networks', 'Software engineering', 'Artificial intelligence'] : ['Engineering foundations', 'Core discipline studies', 'Design & analysis', 'Professional practice', 'Technical electives', 'Project learning']).map((course, index) => <div className="course-topic" key={course}><span>0{index + 1}</span><strong>{course}</strong><Arrow diagonal /></div>)}</div></section>

      <section className="department-labs" id="laboratories"><div className="department-labs-copy"><p className="section-kicker">LEARNING BY DOING</p><h2>Laboratories</h2><p>Practical spaces help students test ideas, develop technical confidence and turn classroom concepts into working projects.</p></div><div className="lab-list">{(isComputerEngineering ? ['Programming & software development', 'Networks & systems', 'Data science & intelligent systems'] : ['Core engineering practice', 'Design & experimentation', 'Interdisciplinary project work']).map((lab, index) => <div key={lab}><span>LAB 0{index + 1}</span><strong>{lab}</strong><Arrow diagonal /></div>)}</div></section>

      <section className="department-research" id="research-areas"><p className="section-kicker">QUESTIONS WORTH PURSUING</p><h2>Research Areas</h2><div className="research-tags">{(isComputerEngineering ? ['Artificial intelligence', 'Cybersecurity', 'Cloud & distributed systems', 'Data science', 'Human-computer interaction', 'Software systems'] : ['Advanced materials', 'Sustainable systems', 'Automation & controls', 'Design innovation', 'Data-informed engineering', 'Smart infrastructure']).map((area) => <span key={area}>{area}<Arrow diagonal /></span>)}</div></section>

      <section className="department-resources">
        <article id="timetable"><p className="section-kicker">PLAN YOUR TERM</p><h2>Timetable</h2><p>Class schedules are organized by academic term, year and section. Check the latest department timetable for current timings.</p><a className="text-action" href="#timetable">Timetable information <Arrow /></a></article>
        <article id="syllabus"><p className="section-kicker">YOUR ACADEMIC ROADMAP</p><h2>Syllabus</h2><p>Explore course outcomes, learning modules and assessment structure in the current academic-year syllabus.</p><a className="text-action" href="#syllabus">Syllabus information <Arrow /></a></article>
      </section>

      <section className="department-community">
        <article id="achievements"><p className="section-kicker">WORK THAT GOES FURTHER</p><h2>Achievements</h2><p>Students and faculty share their work through projects, competitions, research forums and community initiatives. Department highlights celebrate that ongoing effort.</p></article>
        <article id="student-activities"><p className="section-kicker">LEARN TOGETHER, MAKE TOGETHER</p><h2>Student Activities</h2><p>Technical clubs, peer learning, workshops and project showcases give students room to collaborate, try new ideas and build beyond the classroom.</p><a className="text-action" href="/departments">Explore all departments <Arrow /></a></article>
      </section>
    </main>
  )
}

const admissionSteps = [
  { step: '01', title: 'Check eligibility', detail: 'Review program-wise eligibility criteria for B.Tech, M.Tech and Ph.D. admissions.' },
  { step: '02', title: 'Apply online', detail: 'Fill the enquiry / application form and submit your academic details.' },
  { step: '03', title: 'Entrance & merit', detail: 'Admissions through MHT-CET / JEE Main / GATE scores and merit counselling as applicable.' },
  { step: '04', title: 'Document verification', detail: 'Verify original documents at the admissions office or designated centre.' },
  { step: '05', title: 'Confirm admission', detail: 'Pay fees within the deadline to confirm your seat and receive enrollment details.' },
]

const eligibilityCriteria = [
  { program: 'B.Tech (First Year)', detail: 'HSC (10+2) with Physics, Mathematics and Chemistry / Biology / Technical subject with minimum 45% marks (40% for reserved categories) plus a valid MHT-CET / JEE Main score.' },
  { program: 'B.Tech (Direct Second Year)', detail: 'Diploma in Engineering with minimum 45% marks (40% for reserved categories) through the lateral-entry counselling process.' },
  { program: 'M.Tech', detail: 'B.E. / B.Tech in a relevant discipline with minimum 50% marks (45% for reserved categories) plus a valid GATE score. Non-GATE candidates considered on vacant seats by merit.' },
  { program: 'Ph.D.', detail: 'M.E. / M.Tech or equivalent postgraduate degree in a relevant field with minimum 55% marks, plus entrance test and interview as per institute norms.' },
]

const importantDates = [
  { date: '15 JUN 2026', title: 'Applications open', detail: 'Online application and enquiry form opens for 2026–27.' },
  { date: '20 JUL 2026', title: 'Application deadline', detail: 'Last date to submit the online application form.' },
  { date: '05 AUG 2026', title: 'Merit list & counselling', detail: 'Provisional merit lists and counselling rounds announced.' },
  { date: '25 AUG 2026', title: 'Document verification', detail: 'Verification of originals and fee payment window.' },
  { date: '08 SEP 2026', title: 'Orientation & term begins', detail: 'New student orientation and commencement of classes.' },
]

const requiredDocuments = [
  'HSC / SSC mark sheets and passing certificates',
  'MHT-CET / JEE Main / GATE scorecard (as applicable)',
  'Transfer / leaving certificate from previous institute',
  'Caste / category certificate, if applicable',
  'Domicile / nationality certificate',
  'Aadhaar card and recent passport-size photographs',
]

const admissionSections = [
  ['Process', 'process'],
  ['Eligibility', 'eligibility'],
  ['Important Dates', 'dates'],
  ['Documents', 'documents'],
  ['Enquiry Form', 'enquiry'],
]

function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="admissions-page">
      <section className="admissions-hero">
        <div className="admissions-hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> ADMISSIONS 2026–27</p>
          <h1>Find your way<br /><em>to VIT Pune.</em></h1>
          <p>Explore the admission process, check eligibility, note important dates and send us an enquiry. Our admissions team will guide you at every step.</p>
          <div className="hero-actions"><a className="button button-primary" href="#enquiry">Apply / Enquire <Arrow /></a><a className="button button-text" href="#process">View process <Arrow diagonal /></a></div>
        </div>
        <div className="admissions-hero-note"><strong>2026—27</strong><span>APPLICATIONS NOW OPEN</span></div>
      </section>

      <nav className="admissions-index" aria-label="Admissions sections">
        {admissionSections.map(([label, id]) => <a href={`#${id}`} key={id}>{label}<Arrow diagonal /></a>)}
      </nav>

      <section className="admissions-process" id="process">
        <div className="section-heading"><div><span className="section-kicker">HOW IT WORKS</span><h2>Admission process.</h2></div><p>Five simple steps from application to enrollment.</p></div>
        <div className="process-steps">
          {admissionSteps.map((item) => (
            <div className="process-step" key={item.step}>
              <span className="process-number">{item.step}</span>
              <strong>{item.title}</strong>
              <small>{item.detail}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="admissions-eligibility" id="eligibility">
        <div className="section-heading"><div><span className="section-kicker">WHO CAN APPLY</span><h2>Eligibility requirements.</h2></div><p>Program-wise qualifying criteria for the current academic year.</p></div>
        <div className="eligibility-grid">
          {eligibilityCriteria.map((item) => (
            <article className="eligibility-card" key={item.program}>
              <strong>{item.program}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="admissions-dates" id="dates">
        <div className="section-heading"><div><span className="section-kicker">MARK YOUR CALENDAR</span><h2>Important dates.</h2></div><p>Indicative schedule for 2026–27. Refer to official notices for updates.</p></div>
        <div className="dates-list">
          {importantDates.map((item) => (
            <div className="date-row" key={item.title}>
              <span className="date-badge">{item.date}</span>
              <span className="date-copy"><strong>{item.title}</strong><small>{item.detail}</small></span>
            </div>
          ))}
        </div>
      </section>

      <section className="admissions-docs" id="documents">
        <div className="section-heading"><div><span className="section-kicker">KEEP THESE READY</span><h2>Required documents.</h2></div><p>Originals plus one set of self-attested photocopies at verification.</p></div>
        <ul className="docs-list">
          {requiredDocuments.map((doc) => <li key={doc}>{doc}</li>)}
        </ul>
      </section>

      <section className="admissions-form-section" id="enquiry">
        <div className="admissions-form-copy">
          <p className="section-kicker">START YOUR APPLICATION</p>
          <h2>Enquiry / application form.</h2>
          <p>Fill in your details and our admissions counsellor will contact you with next steps, fee structure and counselling guidance.</p>
          <span className="form-note">admissions@vitpune.edu · +91 20 2428 3131</span>
        </div>
        {submitted ? (
          <div className="form-success" role="status">
            <strong>Thank you! Your enquiry has been received.</strong>
            <p>Our admissions team will contact you shortly. A confirmation has been noted for the 2026–27 cycle.</p>
            <button type="button" className="button button-primary" onClick={() => setSubmitted(false)}>Submit another enquiry</button>
          </div>
        ) : (
          <form className="enquiry-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
            <label>Full name<input name="name" type="text" placeholder="e.g. Aarav Sharma" required /></label>
            <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
            <label>Phone<input name="phone" type="tel" placeholder="+91 98765 43210" required /></label>
            <label>Program applying for
              <select name="program" defaultValue="B.Tech (First Year)" required>
                <option>B.Tech (First Year)</option>
                <option>B.Tech (Direct Second Year)</option>
                <option>M.Tech</option>
                <option>Ph.D.</option>
              </select>
            </label>
            <label>Preferred department
              <select name="department" defaultValue="Computer Engineering" required>
                {departments.map((d) => <option key={d.slug}>{d.name}</option>)}
              </select>
            </label>
            <label className="full-width">Message<textarea name="message" rows="4" placeholder="Questions about eligibility, fees, hostel, counselling..." /></label>
            <button type="submit" className="button button-primary full-width">Submit enquiry <Arrow /></button>
          </form>
        )}
      </section>
    </main>
  )
}

const noticesEventsSections = [
  ['Exam Schedules', 'exams'],
  ['Academic Notices', 'notices'],
  ['Circulars', 'circulars'],
  ['Workshops', 'workshops'],
  ['Festivals', 'festivals'],
  ['College News', 'news'],
]

const examSchedules = [
  { date: '10 DEC 2026', title: 'End-semester examinations begin', detail: 'B.Tech S.Y. / T.Y. timetables published department-wise. Hall tickets available on student portal.' },
  { date: '18 NOV 2026', title: 'Mid-semester examination timetable', detail: 'Mid-sem test schedule for all branches. Seating plans displayed on department notice boards.' },
  { date: '05 JAN 2027', title: 'Practical / oral examinations', detail: 'Lab practicals and project reviews as per department slots. Contact your class coordinator.' },
]

const academicNotices = [
  { category: 'Academics', date: '12 OCT 2026', title: 'Academic calendar for even semester released', detail: 'Teaching, examination and vacation schedule for Jan–May 2027.' },
  { category: 'Scholarship', date: '28 SEP 2026', title: 'Scholarship renewal applications invited', detail: 'Eligible students to submit renewal forms with documents by 20 Oct.' },
  { category: 'Library', date: '15 SEP 2026', title: 'Extended library hours during examinations', detail: 'Central library open 8 AM – 10 PM on all working days.' },
]

const circularsList = [
  { category: 'General', date: '08 OCT 2026', title: 'Anti-ragging awareness week circular', detail: 'Mandatory orientation for first-year students and mentors.' },
  { category: 'Attendance', date: '01 OCT 2026', title: 'Minimum attendance requirement notice', detail: '75% attendance mandatory to be eligible for end-semester examinations.' },
  { category: 'Fees', date: '20 SEP 2026', title: 'Second installment fee payment circular', detail: 'Pay fees before 31 Oct to avoid late-fee charges.' },
]

const workshopsList = [
  { day: '24', month: 'OCT', title: 'Hands-on AI & Machine Learning Bootcamp', detail: 'Department of Computer Engineering · 3-day workshop', time: '10:00 AM · Innovation Centre' },
  { day: '07', month: 'NOV', title: 'Robotics & Embedded Systems Workshop', detail: 'E&TC and Instrumentation departments · open to all branches', time: '9:30 AM · Lab Block B' },
  { day: '19', month: 'NOV', title: 'Resume Building & Interview Skills', detail: 'Training & placement cell · final-year students', time: '2:00 PM · Seminar Hall' },
]

const festivalsList = [
  { day: '12', month: 'DEC', title: 'VIT TechFest 2026', detail: 'Inter-college technical festival · hackathons, project expo, coding contests', time: 'Main campus · 3 days' },
  { day: '22', month: 'JAN', title: 'Udaan Cultural Festival', detail: 'Music, dance, drama and art · student council showcase', time: 'Amphitheatre · 2 days' },
  { day: '05', month: 'FEB', title: 'Sports Week & Annual Day', detail: 'Inter-department tournaments followed by annual gathering', time: 'Sports complex' },
]

const collegeNewsList = [
  { category: 'Achievement', date: '10 OCT 2026', title: 'VIT Pune team wins national hackathon', detail: 'Computer Engineering students secured first prize among 200+ teams.' },
  { category: 'Research', date: '02 OCT 2026', title: 'Faculty patents published in automation', detail: 'Two new patents from Instrumentation & Mechanical departments.' },
  { category: 'Placement', date: '25 SEP 2026', title: '100+ recruiters confirm for placement season', detail: 'Highest package trends and preparation drives announced by T&P cell.' },
]

function NoticesEventsPage() {
  return (
    <main className="notices-page">
      <section className="notices-hero">
        <div className="notices-hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> STAY INFORMED</p>
          <h1>Notices &amp;<br /><em>events hub.</em></h1>
          <p>Exam schedules, academic notices, circulars, workshops, festivals and college news — everything happening at VIT Pune in one place.</p>
          <div className="hero-actions"><a className="button button-primary" href="#exams">Exam schedules <Arrow /></a><a className="button button-text" href="#workshops">Upcoming events <Arrow diagonal /></a></div>
        </div>
        <div className="notices-hero-note"><strong>06</strong><span>SECTIONS · UPDATED WEEKLY</span></div>
      </section>

      <nav className="notices-index" aria-label="Notices and events sections">
        {noticesEventsSections.map(([label, id]) => <a href={`#${id}`} key={id}>{label}<Arrow diagonal /></a>)}
      </nav>

      <section className="notices-exams" id="exams">
        <div className="section-heading"><div><span className="section-kicker">PLAN YOUR STUDY</span><h2>Exam schedules.</h2></div><p>Official timetables and examination updates.</p></div>
        <div className="dates-list">
          {examSchedules.map((item) => (
            <div className="date-row" key={item.title}>
              <span className="date-badge">{item.date}</span>
              <span className="date-copy"><strong>{item.title}</strong><small>{item.detail}</small></span>
            </div>
          ))}
        </div>
      </section>

      <section className="notices-notices" id="notices">
        <div className="section-heading"><div><span className="section-kicker">ACADEMIC UPDATES</span><h2>Academic notices.</h2></div><p>Calendar, scholarships, library and learning resources.</p></div>
        <div className="notice-grid">
          {academicNotices.map((item) => (
            <article className="notice-card" key={item.title}>
              <div className="announcement-meta"><span>{item.category}</span><time>{item.date}</time></div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="notices-circulars" id="circulars">
        <div className="section-heading"><div><span className="section-kicker">OFFICIAL COMMUNICATION</span><h2>Circulars.</h2></div><p>Rules, attendance, fees and conduct notifications.</p></div>
        <ul className="circulars-list">
          {circularsList.map((item) => (
            <li key={item.title}>
              <span className="circular-meta">{item.category} · {item.date}</span>
              <strong>{item.title}</strong>
              <small>{item.detail}</small>
            </li>
          ))}
        </ul>
      </section>

      <section className="notices-events-section" id="workshops">
        <div className="section-heading"><div><span className="section-kicker">LEARN BEYOND CLASS</span><h2>Workshops.</h2></div><p>Skill-building sessions hosted by departments and cells.</p></div>
        <div className="event-list">
          {workshopsList.map((event) => (
            <div className="event" key={event.title}>
              <span className="event-date"><strong>{event.day}</strong><small>{event.month}</small></span>
              <span className="event-copy"><strong>{event.title}</strong><small>{event.detail}</small><small className="event-time">{event.time}</small></span>
              <Arrow diagonal />
            </div>
          ))}
        </div>
      </section>

      <section className="notices-events-section notices-festivals" id="festivals">
        <div className="section-heading"><div><span className="section-kicker">CELEBRATE TOGETHER</span><h2>Festivals.</h2></div><p>Technical, cultural and sports celebrations on campus.</p></div>
        <div className="event-list">
          {festivalsList.map((event) => (
            <div className="event" key={event.title}>
              <span className="event-date"><strong>{event.day}</strong><small>{event.month}</small></span>
              <span className="event-copy"><strong>{event.title}</strong><small>{event.detail}</small><small className="event-time">{event.time}</small></span>
              <Arrow diagonal />
            </div>
          ))}
        </div>
      </section>

      <section className="notices-news" id="news">
        <div className="section-heading"><div><span className="section-kicker">VIT IN THE SPOTLIGHT</span><h2>College news.</h2></div><p>Achievements, research highlights and placements.</p></div>
        <div className="announcement-list">
          {collegeNewsList.map((item) => (
            <div className="announcement" key={item.title}>
              <div className="announcement-meta"><span>{item.category}</span><time>{item.date}</time></div>
              <h3>{item.title}</h3>
              <p className="news-detail">{item.detail}</p>
              <Arrow diagonal />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

const placementsSections = [
  ['Placement Cell', 'cell'],
  ['Statistics', 'statistics'],
  ['Recruiters', 'recruiters'],
  ['Internships', 'internships'],
  ['Activities', 'activities'],
]

const placementStats = [
  { value: '100+', label: 'Recruiting companies' },
  { value: '85%', label: 'Placement rate 2025–26' },
  { value: '12 LPA', label: 'Highest package' },
  { value: '5.2 LPA', label: 'Average package' },
]

const recruitersList = [
  'TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant', 'Capgemini',
  'Persistent Systems', 'KPIT Technologies', 'Tata Motors', 'Siemens',
  'Amazon', 'Microsoft',
]

const internshipOpportunities = [
  { date: 'JUN – AUG', title: 'Summer internships (S.Y. / T.Y.)', detail: 'Industry internships via placement cell referrals and department mentors. Stipend varies by role.' },
  { date: 'SEM VI', title: 'Semester-long industry projects', detail: 'Final-year students undertake full-semester projects with partner companies.' },
  { date: 'YEAR-ROUND', title: 'Research & startup internships', detail: 'On-campus innovation centre, faculty labs and incubated startups offer rolling openings.' },
]

const placementActivities = [
  { step: '01', title: 'Aptitude & soft-skills training', detail: 'Quantitative aptitude, communication and group-discussion practice from S.Y. onwards.' },
  { step: '02', title: 'Technical bootcamps', detail: 'DSA, DBMS, OS and domain-specific workshops with mock assessments.' },
  { step: '03', title: 'Mock interviews', detail: 'HR and technical mock rounds conducted by alumni and industry mentors.' },
  { step: '04', title: 'Placement drives', detail: 'On-campus and pooled drives coordinated with recruiters through the T&P calendar.' },
  { step: '05', title: 'Career counselling', detail: 'One-on-one guidance for higher studies, GATE / GRE / CAT and off-campus opportunities.' },
]

function PlacementsPage() {
  return (
    <main className="placements-page">
      <section className="placements-hero">
        <div className="placements-hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> TRAINING & PLACEMENT CELL</p>
          <h1>Careers that<br /><em>begin on campus.</em></h1>
          <p>Meet the placement cell, explore recruiters and internships, and track placement activities and statistics for VIT Pune.</p>
          <div className="hero-actions"><a className="button button-primary" href="#statistics">View statistics <Arrow /></a><a className="button button-text" href="#recruiters">Top recruiters <Arrow diagonal /></a></div>
        </div>
        <div className="placements-hero-note"><strong>100+</strong><span>RECRUITING PARTNERS</span></div>
      </section>

      <nav className="placements-index" aria-label="Placements sections">
        {placementsSections.map(([label, id]) => <a href={`#${id}`} key={id}>{label}<Arrow diagonal /></a>)}
      </nav>

      <section className="placements-cell" id="cell">
        <div className="section-heading"><div><span className="section-kicker">YOUR CAREER PARTNER</span><h2>Placement cell.</h2></div><p>Guidance from first year to final offer letter.</p></div>
        <div className="cell-grid">
          <article className="cell-card">
            <strong>What the cell does</strong>
            <p>Coordinates recruiter outreach, placement calendars, pre-placement talks, assessments and offer management. Department T&P coordinators support every branch.</p>
          </article>
          <article className="cell-card">
            <strong>How to reach us</strong>
            <p>Training & Placement Office, VIT Pune.<br />tnp@vitpune.edu · +91 20 2428 3131<br />Office hours: Mon–Fri, 9:30 AM – 5:30 PM.</p>
          </article>
        </div>
      </section>

      <section className="placements-stats" id="statistics">
        <div className="section-heading"><div><span className="section-kicker">OUTCOMES THAT MATTER</span><h2>Placement statistics.</h2></div><p>Indicative figures for recent academic years.</p></div>
        <div className="placement-stats-grid">
          {placementStats.map((stat) => (
            <div className="placement-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="placements-recruiters" id="recruiters">
        <div className="section-heading"><div><span className="section-kicker">WHERE OUR STUDENTS WORK</span><h2>Recruiters.</h2></div><p>A snapshot of companies visiting campus.</p></div>
        <div className="recruiters-grid">
          {recruitersList.map((name) => <span key={name}>{name}</span>)}
        </div>
      </section>

      <section className="placements-internships" id="internships">
        <div className="section-heading"><div><span className="section-kicker">LEARN BY WORKING</span><h2>Internship opportunities.</h2></div><p>Structured pathways into industry experience.</p></div>
        <div className="dates-list">
          {internshipOpportunities.map((item) => (
            <div className="date-row" key={item.title}>
              <span className="date-badge">{item.date}</span>
              <span className="date-copy"><strong>{item.title}</strong><small>{item.detail}</small></span>
            </div>
          ))}
        </div>
      </section>

      <section className="placements-activities" id="activities">
        <div className="section-heading"><div><span className="section-kicker">ALWAYS PREPARING</span><h2>Placement activities.</h2></div><p>Training woven into the academic journey.</p></div>
        <div className="process-steps">
          {placementActivities.map((item) => (
            <div className="process-step" key={item.step}>
              <span className="process-number">{item.step}</span>
              <strong>{item.title}</strong>
              <small>{item.detail}</small>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> WHO WE ARE</p>
          <h1>Rooted in purpose.<br /><em>Ready for tomorrow.</em></h1>
          <p>For over four decades, VIT has brought people, ideas and ambition together to shape a better future.</p>
        </div>
        <div className="about-hero-image" role="img" aria-label="Vishwakarma Institute of Technology campus" />
      </section>

      <nav className="about-index" aria-label="About VIT sections">
        {aboutNavigation.map(([label, id]) => <a href={`#${id}`} key={id}>{label}<Arrow diagonal /></a>)}
      </nav>

      <section className="about-story" id="history">
        <div className="about-side-label"><span>01 / OUR STORY</span></div>
        <div className="about-story-copy">
          <p className="section-kicker">A FOUNDATION FOR WHAT’S NEXT</p>
          <h2>Four decades of<br />making ideas matter.</h2>
          <p>Established in 1983 in Pune, Vishwakarma Institute of Technology has built its reputation on an education that joins strong fundamentals with hands-on experience. Our story is shaped by generations of students and educators who turn learning into meaningful work.</p>
        </div>
        <div className="about-year"><strong>1983</strong><span>THE YEAR VIT BEGAN</span></div>
      </section>

      <section className="about-values" id="vision">
        <div className="about-values-heading"><p className="section-kicker">VISION & MISSION</p><h2>Learning with direction.<br /><em>Innovation with purpose.</em></h2></div>
        <article><span>OUR VISION</span><h3>Build knowledge that moves us forward.</h3><p>To be a leading institute known for academic excellence, meaningful innovation and graduates who contribute to society.</p></article>
        <article><span>OUR MISSION</span><h3>Make every opportunity count.</h3><p>We create an engaging learning environment that develops capability, integrity and a lifelong spirit of inquiry.</p></article>
      </section>

      <section className="director-section" id="director">
        <div className="director-image" role="img" aria-label="VIT academic building" />
        <div className="director-copy"><p className="section-kicker">A NOTE TO OUR COMMUNITY</p><h2>“The future belongs to those who stay curious and have the courage to build.”</h2><p>At VIT, we encourage students to learn deeply, think independently and work together across disciplines. Every project, conversation and new challenge is a chance to grow into the change-maker the world needs.</p><strong>Director</strong><span>Vishwakarma Institute of Technology, Pune</span></div>
      </section>

      <section className="about-credentials">
        <article id="accreditation"><p className="section-kicker">QUALITY & ACCOUNTABILITY</p><h2>Accreditation</h2><p>Our academic quality is strengthened through regular review, outcome-focused learning and a commitment to recognized standards. Program-specific accreditation details are maintained by the institute.</p><a href="#contact">Explore academic quality <Arrow /></a></article>
        <article id="rankings"><p className="section-kicker">A CONTINUING JOURNEY</p><h2>Rankings</h2><p>Rankings offer one perspective on an institution’s work. We continue to build on our academic, research and student outcomes while keeping the quality of learning at the center.</p><a href="#contact">View institutional profile <Arrow /></a></article>
      </section>

      <section className="about-spaces" id="infrastructure">
        <div className="about-spaces-image" role="img" aria-label="Modern university learning and research spaces" />
        <div className="about-spaces-copy"><p className="section-kicker">SPACES TO MAKE AND DISCOVER</p><h2>Infrastructure for ideas in motion.</h2><p>Purpose-built classrooms, laboratories, studios, libraries and collaborative spaces help students move from a question to a working solution. Our facilities support focused study, experimentation and teamwork.</p><a className="button button-primary" href="#campus">Discover campus <Arrow /></a></div>
      </section>

      <section className="about-campus" id="campus">
        <div><p className="section-kicker">MORE THAN A PLACE TO STUDY</p><h2>A campus that brings<br /><em>people together.</em></h2><p>Set in Pune, VIT is a lively community shaped by shared learning, student initiatives and everyday moments of discovery. Find your people, take part and make this place your own.</p></div>
        <div className="campus-image" role="img" aria-label="Green campus walkway" />
      </section>
    </main>
  )
}

function App() {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/'
  const isAboutPage = currentPath === '/about'
  const isAdmissionsPage = currentPath === '/admissions'
  const isNoticesPage = currentPath === '/notices-events'
  const isPlacementsPage = currentPath === '/placements'
  const isDepartmentPage = currentPath === '/departments' || currentPath.startsWith('/departments/')
  const currentDepartment = departments.find((department) => currentPath === `/departments/${department.slug}`)
  const isHomePage = currentPath === '/'

  return (
    <div className="site-shell">
      <div className="utility-bar">
        <span>PUNE, INDIA <i aria-hidden="true">·</i> EST. 1983</span>
        <div className="utility-links">
          <a href="#alumni">Alumni</a>
          <a href="#careers">Careers</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <header className="site-header">
        <a className="brand" href={isHomePage ? '#home' : '/'} aria-label="Vishwakarma Institute of Technology home">
          <span className="brand-mark">V<span>.</span></span>
          <span className="brand-name">VISHWAKARMA INSTITUTE<br />OF TECHNOLOGY</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="/about" aria-current={isAboutPage ? 'page' : undefined}>About</a>
          <a href="/departments" aria-current={isDepartmentPage ? 'page' : undefined}>Departments</a>
          <a href="/admissions" aria-current={isAdmissionsPage ? 'page' : undefined}>Admissions</a>
          <a href="/notices-events" aria-current={isNoticesPage ? 'page' : undefined}>Notices & Events</a>
          <a href="/placements" aria-current={isPlacementsPage ? 'page' : undefined}>Placements</a>
          <a href="/#academics">Academics</a>
          <a href="/#research">Research</a>
          <a href="/#campus-life">Campus life</a>
        </nav>
        <a className="header-apply" href="/admissions">Apply now <Arrow diagonal /></a>
      </header>

      {isAboutPage ? <AboutPage /> : isAdmissionsPage ? <AdmissionsPage /> : isNoticesPage ? <NoticesEventsPage /> : isPlacementsPage ? <PlacementsPage /> : isDepartmentPage ? <DepartmentsPage department={currentDepartment} /> : <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> LEARN WITH PURPOSE. LEAD WITH IMPACT.</p>
            <h1>Empowering<br />students.<br /><em>Building tomorrow.</em></h1>
            <p className="hero-description">Discover opportunities, academics, innovation and campus life at Vishwakarma Institute of Technology.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#academics">Explore programs <Arrow /></a>
              <a className="button button-text" href="#admissions">Apply now <Arrow diagonal /></a>
            </div>
            <div className="hero-note"><span className="note-dot" /> A place to think bigger, make boldly, and belong.</div>
          </div>
          <div className="hero-visual" role="img" aria-label="A university campus framed by trees">
            <div className="image-caption"><span>THE VIT EXPERIENCE</span><span>PUNE, MAHARASHTRA</span></div>
            <div className="hero-index">01 <span>/ 04</span></div>
          </div>
          <div className="hero-side-label">VISHWAKARMA INSTITUTE OF TECHNOLOGY · 2025</div>
        </section>

        <section className="stats-band" aria-label="VIT at a glance">
          <div className="stats-intro"><span className="section-kicker">VIT AT A GLANCE</span><p>Big ideas.<br />Real-world impact.</p></div>
          {statistics.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="quick-section" id="about">
          <div className="section-heading">
            <div><span className="section-kicker">YOUR NEXT CHAPTER STARTS HERE</span><h2>Find your direction.</h2></div>
            <p>Curiosity has many paths. Find the one that feels like yours.</p>
          </div>
          <div className="quick-links">
            {quickLinks.map((link) => (
              <a className="quick-link" href={link.href} key={link.number}>
                <span className="quick-number">{link.number}</span>
                <span className="quick-copy"><strong>{link.title}</strong><small>{link.detail}</small></span>
                <Arrow diagonal />
              </a>
            ))}
          </div>
        </section>

        <section className="updates-section" id="admissions">
          <div className="updates-column" id="academics">
            <div className="section-heading compact-heading">
              <div><span className="section-kicker">WHAT'S HAPPENING</span><h2>Latest updates</h2></div>
              <a className="view-all" href="#announcements">All announcements <Arrow /></a>
            </div>
            <div className="announcement-list" id="announcements">
              {announcements.map((item) => (
                <a href={item.href} className="announcement" key={item.title}>
                  <div className="announcement-meta"><span>{item.category}</span><time>{item.date}</time></div>
                  <h3>{item.title}</h3>
                  <Arrow diagonal />
                </a>
              ))}
            </div>
          </div>
          <div className="events-column" id="campus-life">
            <div className="section-heading compact-heading">
              <div><span className="section-kicker">SAVE YOUR DATE</span><h2>Coming up</h2></div>
              <a className="view-all" href="#events">All events <Arrow /></a>
            </div>
            <div className="event-list" id="events">
              {events.map((event) => (
                <a href="#events" className="event" key={event.title}>
                  <span className="event-date"><strong>{event.day}</strong><small>{event.month}</small></span>
                  <span className="event-copy"><strong>{event.title}</strong><small>{event.detail}</small><small className="event-time">{event.time}</small></span>
                  <Arrow diagonal />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>}

      <footer className="site-footer" id="contact">
        <a className="brand footer-brand" href={isHomePage ? '#home' : '/'}>
          <span className="brand-mark">V<span>.</span></span>
          <span className="brand-name">VISHWAKARMA INSTITUTE<br />OF TECHNOLOGY</span>
        </a>
        <p>Empowering students. Building tomorrow.</p>
        <span>© 2025 Vishwakarma Institute of Technology, Pune</span>
      </footer>
    </div>
  )
}

export default App