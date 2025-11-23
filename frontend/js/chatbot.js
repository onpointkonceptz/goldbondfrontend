// Chatbot Functionality - GOLDBOND LABORATORIES
document.addEventListener('DOMContentLoaded', function() {
    
    const chatbotButton = document.getElementById('chatbotButton');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const closeChatbot = document.getElementById('closeChatbot');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const sendMessage = document.getElementById('sendMessage');

    // Check if elements exist
    if (!chatbotButton || !chatbotContainer) {
        console.error('Chatbot elements not found!');
        return;
    }

    console.log('Chatbot initialized successfully!');

    // Open chatbot
    chatbotButton.addEventListener('click', function() {
        console.log('Chatbot button clicked');
        chatbotContainer.classList.add('active');
    });

    // Close chatbot
    closeChatbot.addEventListener('click', function() {
        console.log('Close button clicked');
        chatbotContainer.classList.remove('active');
    });

    // FAQ Database
    const faqDatabase = {
        "tests": "We offer a comprehensive range of tests including:\n• Complete Blood Count (CBC)\n• Thyroid Function Tests\n• Diabetes Screening (HbA1c, Fasting Glucose)\n• Lipid Profile\n• Liver Function Tests\n• Kidney Function Tests\n• Vitamin D & B12 Tests\n• Blood Banking Services\n• All Pathology Requests\n\nWould you like to book any of these tests?",
        
        "book": "Booking a test is easy! You have 3 options:\n\n1. 📅 Online Booking - Fill out our booking form on the website\n2. 💬 WhatsApp - Message us directly at 08035944767\n3. 📞 Call Us - Speak with our team at 08035944767 or 08023340925\n\nWould you like me to help you book now?",
        
        "results": "Our typical turnaround times are:\n• Routine Blood Tests: 24-48 hours\n• Specialized Tests: 3-5 days\n• Culture Tests: 5-7 days\n• Urgent Tests: Same day (on request)\n\nYou'll receive an SMS/email when results are ready, and can access them through our online portal.",
        
        "hours": "We're open:\n• Monday - Saturday: 7:00 AM - 9:00 PM\n• Sunday: Closed\n\nHome collection service is available 6 days a week from 7:00 AM - 8:00 PM.\n\nNeed to schedule a visit?",
        
        "home": "Yes! We offer FREE home sample collection service:\n• Available Monday - Saturday\n• Timing: 7:00 AM - 8:00 PM\n• Trained phlebotomists\n• Safe & hygienic procedures\n• No extra charges\n\nWould you like to book a home collection?",
        
        "reports": "Access your reports easily:\n\n1. 🔐 Online Portal - Create an account and login with your credentials\n2. 📧 Email - Reports are automatically emailed\n3. 📱 SMS - Receive notification with access link\n4. 🏥 Physical Copy - Collect from our laboratory\n\nAll reports are secured with password protection for your privacy.",
        
        "payment": "We accept all major payment methods:\n• Cash\n• Bank Transfer\n• POS (Debit/Credit Cards)\n• Mobile Money\n• Corporate Billing\n\nDo you need help with payment?",
        
        "accredited": "Yes! GOLDBOND LABORATORIES maintains the highest quality standards:\n• Fully licensed by relevant authorities\n• Experienced pathologists and technicians on staff\n• Regular quality control audits\n• State-of-the-art equipment\n\nYour health is in trusted hands!",
        
        "location": "We are located at:\n📍 Dialogue Close by Daraja Supermarket\nShehu Laminu Road by Tafawa Balewa Way\nU/Rimi, Kaduna\n\nYou can easily find us near Daraja Supermarket. Would you like directions?",
        
        "cost": "Our pricing is competitive and transparent:\n• Basic tests start from ₦2,000\n• Health packages: ₦10,000-₦50,000\n• Free home collection\n• Corporate discounts available\n\nFor specific test pricing, please visit our Services page or contact us directly at 08035944767."
        "major: Dedication This Service Charter is dedicated to our brave and resilient patients and to their devoted caregivers, who, despite the immense challenges they face, continue to stand strong with unwavering determination and the will to heal. Your courage, in the face of uncertainty and emotional storms, inspires hope and reminds us of the strength of the human spirit. We reaffirm our unwavering commitment and support, and we reassure you: you are not alone in your journey toward healing and recovery. We walk with you every step of the way. This document is also dedicated to the hardworking staff of the Federal Neuro-Psychiatric Hospital Kaduna, whose empathy, selflessness, and tireless service, offered day and night with warm and hopeful smiles, ensure that every client receives compassionate, quality care.
Together, we uphold the values of service, dignity, and humanity. 
 
Appreciation
A special thank you to the Medical Director/CEO, Prof. Aishatu Yusha’u Armiya’u, for her unwavering support and keen commitment to providing world-class treatment for all individuals living with mental illness. Her dedication to creating an ergonomic and enabling environment for both service users and healthcare providers has been instrumental in enhancing access to quality care and ensuring the efficient delivery of mental health services.
We deeply appreciate her visionary leadership and the vital role she played in making this Service Charter a reality.
Our sincere gratitude also goes to all the exceptional team members of Federal Neuro-Psychiatric Hospital, Kaduna, especially the SERVICOM Unit Team, whose tireless efforts, dedication, and teamwork ensured the successful production of this important document. 
 
Foreword
In Nigerian healthcare, the Service Compact with all Nigerians (SERVICOM) is a commitment between healthcare providers and clients to deliver effective and efficient health services by promoting excellence, empowering patients, and improving people's confidence.
In view of the aforementioned, this charter is intended to be connected with the federal government's larger renewed hope goal, which strives "to save lives, reduce physical and financial pain, promote health, and ensure it is accessible to all Nigerians".
So far, we have made significant progress in implementing our vision as outlined in the strategic plan. The SERVICOM Charter will serve as a compass in the delivery of services that meet the expectations of patients as the primary beneficiaries of health care, anchored on our collective aspiration of becoming "a leading center of excellence in the provision of quality mental healthcare, mental health education, research, and training of the highest standard." 
In the last two years, the Federal Neuro-Psychiatric Hospital in Kaduna has seen a significant upgrade in healthcare infrastructure, as well as increased staff productivity, which are key catalysts for effective and efficient healthcare provision to our patients and other stakeholders in Kaduna State and beyond.
As caregivers, we want to improve responsibility in regard to our commitments to patients and other stakeholders in terms of providing health services in an efficient and transparent way. Furthermore, we will promote deeper and more harmonious relationships along the mental-health value chain - the delivery of healthcare services, from research and training to patient treatment and aftercare, in a professional, timely, equitable, and transparent way.

Prof. Aishatu Yusha’u Armiya’u
Medical Director/CEO
 
CHAPTER ONE: INTRODUCTION
1.1 Introduction
The Service Charter of the Federal Neuro-Psychiatric Hospital, Kaduna, is a comprehensive declaration of our institutional vision to deliver safe, effective, and dignified mental healthcare to all who seek our services. It is developed in line with the Federal Government of Nigeria’s directive to foster performance-based service delivery across all public institutions.
This Charter is designed to inform the public of the nature and quality of services provided by the hospital, the responsibilities of the hospital to the patients, and the rights and expectations of patients and caregivers. It also outlines the roles of staff, managers, and service users in ensuring that the hospital functions efficiently and with integrity.
FNPH-Kaduna offers a wide range of services spanning psychiatric and neurological care, general medical services, psychosocial support, rehabilitation, emergency response, training, and research. This Charter captures the key departments, operational workflows, minimum service standards, and performance indicators that shape daily operations within the hospital.
In addition to describing what patients should expect when they walk through our doors, the Charter also details:
•	Clear pathways for lodging complaints and receiving feedback.
•	Specific timelines for service delivery.
•	Mechanisms for monitoring and evaluation of staff and services.
•	The collaborative roles of stakeholders in service improvement.
In a health system that is constantly evolving, this Charter serves as a dynamic tool to promote service accountability, equity, innovation, and public confidence.
It is our hope that this document empowers both staff and service users to engage more meaningfully, resulting in a more responsive, humane, and impactful healthcare experience.
 
1.2 Brief Historical Background FNPH Kaduna
The Federal Neuro-Psychiatric Hospital, Kaduna (FNPH-Kaduna) is a premier tertiary mental health institution, strategically located in Kaduna, North-West Nigeria, along Aliyu Makama Road, opposite Shagari Federal Low-Cost Housing, Barnawa, Kaduna South.
The hospital caters to the mental health needs of Nigerians, especially the populations of Kaduna, Kano, Jigawa, Katsina, Gombe, Bauchi, Plateau, Niger, Zamfara, and the Federal Capital Territory, Abuja.
Established in 1975 by the defunct North Central State with an initial 100-bed capacity, the hospital was later taken over by the Federal Government following the recommendations of the National Committee for the Review of Psychiatric Care Services, chaired by Dr. Marinho.
Today, FNPH-Kaduna stands as one of the ten (10) full-fledged Federal Government-owned Psychiatric Hospitals in Nigeria, delivering high-quality mental health services alongside several other critical healthcare functions.
Beyond its core mandate of providing specialized mental healthcare, FNPH-Kaduna is accredited by several professional regulatory bodies, including:
1)	The National Postgraduate Medical College of Nigeria (NPMCN)
2)	The West African College of Physicians (WACP)
3)	The Pharmaceutical Council of Nigeria (PCN)
4)	The Nursing and Midwifery Council of Nigeria (NMCN)
5)	Other allied mental health professional bodies
Currently, the hospital has a bed capacity of 219 and offers a broad range of medical services. These include in-patient and out-patient psychiatric care across various sub-specialties, as well as:
•	National Health Insurance Authority (NHIA) services
•	Social work and occupational therapy
•	Psychotherapy
•	Drug rehabilitation
•	Diagnostic laboratory services
•	Specialized services such as Electroencephalography (EEG) and Electroconvulsive Therapy (ECT)
•	Mental health research and training
In recent years, the hospital has expanded its scope of services by incorporating other general medical services such as: Dialysis (Nephrology Unit), Radiodiagnostic investigations, Outpatient and inpatient general medical operations, Neurology and Cardiology clinics. A notable recent advancement is the establishment of a Molecular Laboratory, signaling the hospital’s commitment to innovation in medical diagnostics.
This strategic diversification aims not only to reduce the stigma associated with mental health conditions but also to meet broader community healthcare needs. 
1.3 Mission Statement
To provide quality and affordable mental healthcare delivered by well trained, highly motivated and patient friendly professional mental health personnel.
1.4 Vision Statement
To be the leading centre of excellence for quality mental healthcare, mental health education, research, and training.
1.5 Our Core Values (#TRIPP)
•	Teamwork     
•	Respect
•	Integrity          
•	Passion
•	Professionalism
1.6 Our Core Principles (#PAGEIT)
•	Punctuality 
•	Adaptability
•	Guided by ethics and the rules of law             
•	Effective communication, 
•	Innovation, learning, and technology
•	Taking ownership and being accountable

1.7 Objectives of the Service Charter
FNPH Kaduna Service Charter aims to establish a transparent, responsive, and accountable framework that defines the hospital's commitment to delivering high-quality, patient-centered mental health care. It seeks to clearly articulate the standards of service, rights, and responsibilities of all stakeholders, including patients, caregivers, staff, and management, with the ultimate goal of promoting excellence in clinical care, administration, research, training, and community engagement.
Specifically, the Service Charter aims to:
1.	Set Clear Service Standards: Define measurable benchmarks for quality, efficiency, timeliness, and professionalism in service delivery.
2.	Enhance Transparency and Accountability: Foster trust through open communication, clear grievance redress mechanisms, and ethical conduct at all levels.
3.	Promote Patient Rights and Participation: Empower patients and caregivers with knowledge of their rights, expected levels of service, and channels for feedback and complaints.
4.	Support Staff Performance and Motivation: Outline mutual expectations between management and staff to ensure an enabling work environment that enhances productivity and satisfaction.
5.	Encourage Continuous Improvement: Provide a foundation for regular performance evaluation, monitoring, and the use of feedback to drive innovation and better outcomes.
6.	Align with National Health Policy: Reinforce the hospital’s role in implementing federal health policies and standards, particularly in the mental health subsector. 
 
1.8 Overview of the Service Charter
The Service Charter of the Federal Neuro-Psychiatric Hospital (FNPH), Kaduna is a strategic document that outlines our unwavering commitment to delivering responsive, people-centered, and high-quality mental healthcare services. It serves as both a social contract and a performance management tool, designed to strengthen trust, transparency, and accountability between the hospital and the individuals, families, and communities we serve.
FNPH Kaduna, as one of Nigeria's foremost neuro-psychiatric institutions, recognizes the growing mental health challenges facing society today. In response, the Service Charter defines the hospital’s core responsibilities, service standards, and mutual expectations between healthcare providers and service users. It ensures that all staff, from frontline clinicians to administrative personnel, understand and deliver their duties with a strong focus on dignity, respect, professionalism, and compassion.
At the heart of this Charter is the belief that mental healthcare is a fundamental human right, and that every patient has the right to receive effective, affordable, and timely care in a safe and supportive environment.
Key Components of the Service Charter:
i.	Vision, Mission, and Core Values of FNPH Kaduna
ii.	Catalogue of Services provided across clinical and support departments
iii.	Service Standards and Benchmarks (including timelines, operational hours, and performance indicators)
iv.	Rights and Responsibilities of patients, caregivers, staff, and management
v.	Grievance Redress Mechanisms and feedback channels for service improvement
vi.	Monitoring and Evaluation tools for performance tracking and accountability
vii.	Review and update the Protocol to ensure relevance in line with evolving health policies and civil service guidelines
The Charter is also a vehicle for implementing SERVICOM principles within the hospital, ensuring that patients are treated with courtesy, timeliness, transparency, and fairness.  In line with modern healthcare delivery, the FNPH Kaduna Service Charter emphasizes:
•	Integration of digital health solutions
•	Upholding of clinical ethics and patient confidentiality
•	Engagement in community-based mental health outreach
•	Promotion of continuous staff development and training
•	Encouragement of research, innovation, and evidence-based practice 
 
1.9 Relevance of the Service Charter
The Service Charter of FNPH Kaduna is a vital governance and quality assurance tool that plays a transformative role in the delivery of mental healthcare services. It is much more than a policy document; it is a binding commitment to transparency, accountability, and excellence in patient care.
1. A Framework for Service Excellence
The Charter serves as a formal declaration of the hospital’s commitment to delivering high-quality, accessible, equitable, and patient-centred services. It clearly outlines what patients, caregivers, stakeholders, and the general public can expect in terms of service scope, standards, timelines, and professional conduct.
2. Promotes Transparency and Accountability
By establishing measurable benchmarks and timelines for services, the Charter promotes openness in hospital operations. It empowers service users to monitor and hold the institution accountable through clearly defined complaint and feedback mechanisms.
3. Protects Patient Rights and Dignity
The Charter enshrines the rights of patients and caregivers to receive timely, respectful, and confidential care. It promotes the protection of vulnerable individuals, particularly those experiencing mental health challenges, ensuring their voice is heard and their choices respected.
4. Guides Service Delivery and Operational Efficiency
For healthcare workers, the Charter is a standardised guide to service delivery. It defines responsibilities, expectations, ethical standards, and communication pathways, leading to better coordination, reduced service delays, and improved operational efficiency.
5. Enhances Staff Performance and Motivation
With its emphasis on clear expectations, performance measurement, and user feedback, the Charter creates a culture of professionalism, continuous learning, and service excellence. Staff are encouraged to embrace innovation, uphold ethical standards, and contribute to institutional goals.
6. Aligns with SERVICOM Principles
The Service Charter aligns with the SERVICOM (Service Compact with All Nigerians) initiative, reinforcing the hospital’s commitment to delivering quality service in line with national performance and public service standards.
7. Supports Monitoring, Evaluation, and Continuous Improvement
The Charter includes built-in mechanisms for regular review, performance monitoring, and feedback analysis. These help the hospital to evaluate its impact, identify service gaps, and implement corrective actions in real-time.
8. Builds Public Confidence
Through consistent delivery on its service promises, FNPH Kaduna strengthens public trust and confidence in the mental healthcare system. This helps reduce stigma, encourages service utilisation, and fosters community collaboration in mental health promotion.
9. Facilitates Research and Training
The Charter also enhances the hospital’s role as a training and research institution by providing clear operational standards and ethical guidelines that inform academic programs, clinical postings, and collaborative studies.
1.10 Target Audience 
The Service Charter of the FNPH Kaduna is comprehensive and designed to address the needs and expectations of various stakeholders who engage with or are affected by the hospital’s services. These include:
1.	Patients and Service Users: Individuals seeking mental health services, including outpatient care, emergency interventions, inpatient treatment, rehabilitation, and follow-up support.
2.	Families, Caregivers, and Advocates: Those who provide emotional, physical, and logistical support to patients and who often engage with hospital personnel on behalf of service users.
3.	Healthcare Professionals and Hospital Staff: Medical, paramedical, administrative, and support personnel are responsible for the delivery of care, adherence to service standards, and overall institutional performance.
4.	Management and Policymakers: Leadership and decision-makers within the hospital and relevant ministries who use the Charter as a guide for planning, oversight, and institutional accountability.
5.	Students, Interns, and Researchers: Trainees, medical students, and researchers who depend on the Charter to understand operational ethics, patient rights, and clinical standards within the hospital setting.
6.	Regulatory Agencies and Government Bodies: Oversight institutions such as the Federal Ministry of Health, SERVICOM, and NHIA use the Charter for performance monitoring, policy alignment, and compliance evaluation.
7.	Donors, Development Partners, and NGOs: Organisations involved in funding, supporting, or collaborating with the hospital on health and development projects who require assurance of ethical service delivery and transparency.
8.	The General Public: Community members and potential service users who rely on the Charter to understand available services, patient rights, and institutional commitments.
 
1.11 Service Delivery Principles
The Federal Neuro-Psychiatric Hospital, Kaduna, is committed to delivering quality mental healthcare through a set of guiding principles designed to ensure excellence, accountability, and patient satisfaction.
1. Accessibility
•	Every patient seen in the hospital shall have an electronic medical record (EMR) and an electronic hospital card generated at the point of registration.
•	Patients must be attended to within 10–20 minutes of arrival at the General Outpatient Department (GOPD) or Emergency Unit.
•	Emergency services shall be available 24 hours a day, 7 days a week, including weekends and public holidays.
•	Emergency cases must be triaged within 5 minutes and attended to by a qualified healthcare professional within 20 minutes.
•	All new patients shall be received and evaluated at the Emergency Unit.
•	Patients should not wait more than 40 minutes for consultation after registration.
•	Accessibility provisions for persons with disabilities must be ensured, including ramps, elevators, and sign language interpreters where required.
•	Referrals to specialists will be scheduled on designated clinic days. Admitted patients must be reviewed by a physician within 24 hours.
•	Admission processes must be completed within 1 hour of the decision to admit.
•	Consultants shall review their admitted patients within 24–48 hours of admission.
•	Patients should have access to an online or phone-based appointment system for convenience.
•	Non-urgent appointments should be scheduled within 7 working days; urgent cases must be attended to on the same day.
•	Complicated cases shall be co-managed by a multi-disciplinary team of specialists to ensure comprehensive care.
•	Discharge procedures must be completed within 2 hours of the discharge order.
•	Psychological counselling and mental health services shall be available for patients dealing with stress, anxiety, or chronic conditions.
•	Ward and emergency unit visitation time shall be observed daily between 4:00 PM and 6:00 PM.
2. Courtesy and Respect
•	All staff are expected to address patients and caregivers politely, maintain a professional demeanour, and treat them with dignity, compassion, and confidentiality.
3. Quality of Care
•	All diagnoses and treatments shall be guided by evidence-based practices and conform to national and international clinical guidelines.
•	Care will be person-centred, holistic, and culturally sensitive.
4. Patient Safety
•	All clinical procedures must be conducted using sterile equipment in strict adherence to infection prevention and control (IPC) protocols.
•	Systems must be in place to minimise and manage medical errors, including routine checks, proper documentation, and incident reporting.
5. Investigations and Radiology Services
•	Routine laboratory and imaging test results shall be made available within 24 hours.
•	Urgent tests should be processed and results delivered within 1–2 hours.
6. Pharmacy Services
•	Medication dispensation shall be completed within 30 minutes of prescription confirmation.
•	Patient counselling on medication usage, side effects, and adherence will be provided.
7. Complaint Resolution
•	All complaints shall be acknowledged within 24 hours.
•	Resolution of complaints shall occur within 2–5 working days, depending on complexity.
•	Suggestion boxes, dedicated email addresses, and telephone hotlines will be made available for patient feedback.
•	Feedback received shall be analysed, and actionable steps implemented within 10 days to improve services.
8. Billing and Payments
•	Transparent and accurate billing processes shall be maintained.
•	All patients will be informed of the cost of services before treatment is initiated.
•	Official receipts will be issued for every payment made.
9. Cleanliness
•	All hospital premises, including wards, toilets, consulting rooms, and waiting areas, shall be cleaned multiple times daily.
•	Dedicated cleaning staff will ensure hygiene is maintained at all times.
10. Clear and Timely Communication
•	Patients and their caregivers shall receive regular updates on diagnosis, treatment plans, progress, and prognosis.
•	Educational materials such as pamphlets, posters, and audiovisual aids shall be provided to improve patient understanding and engagement.
 
1.12 Our Service Pledge
At Federal Neuro-Psychiatric Hospital (FNPH), Kaduna, we are committed to delivering compassionate, professional, and high-quality mental healthcare services to all our patients, their families, and caregivers. We pledge to uphold the highest standards of care, transparency, integrity, and accountability in every aspect of our service delivery.
Specifically, we pledge to:
•	Prioritise Your Well-being: Your mental, emotional, and physical well-being will remain at the heart of everything we do. We commit to a patient-centred approach that respects your individual needs and promotes holistic healing.
•	Deliver Quality Care: We shall provide evidence-based, ethical, and effective mental healthcare services delivered by qualified, skilled, and empathetic mental health professionals.
•	Treat with Respect and Dignity: Every patient and their family will be treated with the highest level of respect, dignity, empathy, and fairness, regardless of background, condition, gender, age, ethnicity, religion, or socio-economic status.
•	Uphold Confidentiality: We are committed to maintaining the strict confidentiality of your personal and medical information in accordance with professional and legal standards.
•	Communicate Clearly and Transparently: We will ensure that you are given accurate, timely, and understandable information regarding your condition, available treatment options, and care plan to support informed decision-making.
•	Provide Accessible and Timely Services: We will reduce unnecessary delays and strive to make our services available and accessible to all, especially persons with special needs.
•	Listen and Respond Promptly: Your voice matters. We will welcome and respond to your feedback, suggestions, and complaints promptly, fairly, and with a commitment to resolution.
•	Maintain a Safe and Healing Environment: We pledge to provide a clean, secure, and therapeutic environment that fosters recovery and supports mental well-being.
•	Foster Continuous Improvement: We are committed to ongoing learning, innovation, and service improvement. We will regularly assess our practices, incorporate feedback, and adopt best practices to improve your healthcare experience.
 
CHAPTER TWO: The Hospital Directorates
 2.1 Hospital Directorates
To ensure efficient service delivery and the effective execution of its mandate to the people of Nigeria, the management of the institution is structured into four (4) directorates, namely:
1)	Directorate of the Medical Director
2)	Directorate of Clinical Services
3)	Directorate of Administration
4)	Directorate of Finance and Accounts


 2.2 Hospital Organogram

2.3 Patient information guide 
 
 
CHAPTER THREE: The Hospital Mandates
Federal Neuro-Psychiatric Hospital, Kaduna, operates under three (3) core mandates, all aimed at providing quality and efficient services to its clients. These are:
1.	Service: To provide advanced and comprehensive mental health services in line with international best practices.
2.	Training: To serve as a hub for residency programs, post-basic psychiatric nursing, and other related professional training.
3.	Research: To undertake research into mental health challenges to improve the condition of patients with mental illness and deliver the best mental health services.
The hospital comprises 18 services, 3 training units, and 3 research units/departments.
Each of these plays a critical role in ensuring excellent and exceptional service delivery in alignment with the hospital’s core mandates.
 
 
 
3.2 Service Provision 
These are the departments and units responsible for delivering mental healthcare and related medical services within the hospital. They provide specialised care for a range of acute mental health disorders, often integrated with general medical treatment.
Goal: To ensure comprehensive care, from diagnosis and treatment to rehabilitation, while supporting patients' successful reintegration into their communities.
Service Provision Departments/Units:
1.	Clinical Psychology Department
2.	Dialysis Unit
3.	EEG/ECT Unit
4.	Environmental Health Unit]
5.	Health Information Records Unit
6.	Information and Protocol Unit
7.	Intensive Care Unit (ICU)
8.	Medical Laboratory Department
9.	Medical Outpatient Department (MOPD)
10.	Medical Services Department
11.	National Health Insurance Authority (NHIA) Clinic
12.	Neurology Clinic
13.	Nursing Services Department
14.	Occupational Therapy Unit
15.	Pharmacy Department
16.	Radiodiagnostic Department
17.	Revenue and Accounts Unit
18.	Social Welfare Department

1.	Clinical Psychology Department
The Clinical Psychology Department provides comprehensive psychological services, including assessment, diagnosis, and evidence-based interventions for individuals experiencing a variety of mental health challenges, including Substance Use Disorders (SUDs).
Scope of Services:
•	Psychological assessment and diagnostic evaluation
•	Individual and group psychotherapy
•	Family therapy (as needed)
•	Crisis intervention and emergency support
•	Collaborative care with psychiatrists for medication management
•	Ongoing monitoring and progress evaluations
•	Support for both inpatient and outpatient clients
The department is staffed by a multidisciplinary team consisting of:
•	Licensed Clinical Psychologists
•	Psychiatrists
•	Other mental health professionals who work together to deliver person-centred care
Psychologists participate in general ward rounds and are stationed at both the General Outpatient Department (GOPD) and the Emergency Unit to ensure accessible psychological support. Patients with substance use disorders are a key focus of intervention, alongside individuals with depression, anxiety, trauma-related conditions, and other psychological disorders.
Service Schedule:
•	Days: Monday to Friday
•	Time: 8:00 AM – 4:00 PM
•	Patient Access:
o	Most clients are referred internally by medical officers.
o	External clients are accepted for evaluation based on availability.

Service Standards
Service Area	Standard/Benchmark
Psychological Assessment & Diagnosis	Initial assessment completed within 2 working days of referral
Psychotherapy Sessions	5-session therapy cycle with possible extension to 10 sessions based on clinical need
Client-to-Psychologist Ratio	Maximum of 10 active clients per psychologist per day
Emergency Psychological Response	Response within 30 minutes of notification (during working hours)
Family Therapy	Available within 5 working days of recommendation
Outpatient Appointment Scheduling	Appointments scheduled within 5 days of request/referral
Follow-up and Review	Clients are reviewed every 2 weeks or as clinically indicated.
Interdisciplinary Collaboration	Weekly case review meetings with the Psychiatry and Nursing teams
Service Feedback	Minimum 90% client satisfaction (via periodic surveys)

 
2.	Dialysis Unit
The Dialysis Unit is a state-of-the-art facility designed to provide life-sustaining dialysis therapy for patients with kidney failure. This unit plays a critical role in managing end-stage renal disease and acute kidney conditions, offering high-quality care through a dedicated team of professionals.
Facility and Staffing:
•	Equipped with four (4) dialysis machines:
o	Two machines are designated for standard (non-infectious) dialysis
o	Two machines for septic or infectious cases, to prevent cross-contamination
•	Staffed by: One (1) Consultant Nephrologist, Nine (9) Trained Nephrology Nurses, Supporting personnel, including social workers and health educators.
Service Scope:
•	Hemodialysis for patients with chronic and acute renal failure
•	Assessment and pre-dialysis evaluation by a Consultant Nephrologist
•	Health education and counselling before initiation of treatment
•	Laboratory investigations (pre-treatment baseline tests)
•	Referral-based access (with exceptions for walk-in emergencies after nephrologist assessment)
•	Use of comfortable, ergonomic chairs to enhance patient comfort during procedures
•	Patient follow-up via phone calls and electronic health records to track defaulters
Service Availability:
•	24 hours a day / 7 days a week (Round-the-clock services)
•	Emergency and routine dialysis are both catered for


Service Standards
Service Area	Benchmark / Standard
Dialysis Machine Availability	100% operational readiness for all 4 machines at all times
Patient-to-Machine Ratio	1:1 during dialysis to ensure safety and effectiveness
Initial Consultant Review (Non-referral)	Must occur within 2 hours of arrival
Laboratory Investigation Turnaround	Basic tests completed within 6 hours of request
Dialysis Session Duration	Standard session of 4 hours per patient
Dialysis Session Frequency	3 sessions per week (as clinically indicated)
Emergency Response	Start of emergency dialysis within 1 hour of clinical indication
Patient Education	Health education provided before 100% of initial sessions
Follow-Up Compliance	At least a 90% follow-up rate for patients missing appointments
Infection Control Protocols	100% compliance with septic vs. non-septic dialysis segregation
Client Satisfaction	Minimum 95% satisfaction score based on quarterly feedback surveys

 
3. EEG/ECT Unit
The EEG/ECT Unit at the Federal Neuro-Psychiatric Hospital, Kaduna, provides specialised diagnostic and therapeutic services in neuropsychiatric care through Electroencephalography (EEG) and Electroconvulsive Therapy (ECT).
Electroencephalography (EEG) Services: EEG is a non-invasive diagnostic procedure used to measure and record the electrical activity of the brain through electrodes placed on the scalp. This test is crucial for diagnosing and monitoring conditions such as epilepsy, seizure disorders, and other neurological abnormalities.
Electroconvulsive Therapy (ECT) Services: ECT is a safe and effective medical treatment that involves delivering controlled electrical stimulation to the brain under anaesthesia to induce therapeutic seizures. It is used primarily for severe and treatment-resistant psychiatric disorders such as major depressive disorder, catatonia, and some forms of schizophrenia.
•	Modified ECT is offered with anaesthesia administered by a Visiting Consultant Anaesthesiologist, ensuring patient safety and comfort.
•	Consent forms are required for all patients before undergoing ECT, especially for those referred from outside the facility.
•	Prior to ECT, health education is given to patients and/or caregivers, and necessary baseline investigations are conducted to confirm suitability for the procedure.
•	A full course typically consists of six (6) sessions over three (3) weeks.
Operational Days and Hours:
•	EEG Services: Operate 7 days a week, from 8:00 AM to 4:00 PM
•	ECT Services: Conducted twice weekly, on Mondays and Thursdays, from 8:00 AM to 4:00 PM
Emergency ECT can be scheduled outside regular days on a case-by-case basis
Staffing:
•	One (1) Consultant Anaesthesiologist (for ECT)
•	One (1) Consultant Neurologist (for EEG)

Service Standards
Service Area	Standard / Benchmark
EEG Appointment Availability	EEG available 7 days/week, with same-day service for urgent cases
EEG Result Turnaround	Preliminary report within 24 hours, full report within 48 hours
ECT Frequency	Standard protocol: 6 sessions over 3 weeks
ECT Procedure Days	Conducted on Mondays and Thursdays; 100% adherence unless an emergency arises
Consent and Pre-ECT Preparation	100% of patients to complete consent and pre-procedure investigations
Emergency ECT Response	Emergency ECT is scheduled within 6 hours of approval by the psychiatrist and anaesthetist.
Anaesthetic Safety Standard	100% compliance with modified ECT and anaesthesia protocols
Client Satisfaction Rate	≥ 95% satisfaction score from post-treatment feedback
Equipment Downtime Tolerance	Less than 5% equipment downtime monthly
Staff Availability	Full presence of both consultants during 100% of procedures

 
4. Environmental Health Unit
The Environmental Health Unit is vital to maintaining a safe, clean, and hygienic environment for patients, staff, and visitors at the Federal Neuro-Psychiatric Hospital, Kaduna. The unit is responsible for implementing best practices in environmental sanitation, waste management, and infection prevention and control (IPC) in line with national and international healthcare standards.
Core Responsibilities:
•	Routine cleaning and disinfection of hospital wards, clinics, offices, and public areas.
•	Scheduled fumigation of wards and hospital surroundings to prevent vector-borne diseases.
•	Pest control programs targeting rodents, mosquitoes, cockroaches, and other disease vectors.
•	Proper waste segregation and disposal, especially for biomedical and infectious waste.
•	Promotion of eco-friendly practices, including tree planting and green space maintenance, to improve air quality and environmental sustainability.
Service Standards
Service Area	Standard / Benchmark
Cleaning Frequency	General areas cleaned 2x daily; critical zones (ICU, Emergency Unit, GOPD, Wards) cleaned every 4 hours.
Fumigation Schedule	Full hospital fumigation is conducted once every 6 weeks.
Waste Collection and Disposal	Biomedical waste is collected and incinerated daily.
Pest Control Measures	Routine vector control exercises are conducted monthly.
Tree Planting and Green Maintenance	Minimum of 50 trees planted annually; green spaces maintained weekly.
Infection Prevention Compliance (IPC)	100% compliance with IPC protocols across all departments
Environmental Audit	Internal environmental hygiene audits are conducted quarterly.
Staff Training	All environmental staff to receive bi-annual refresher training in hygiene & IPC
Emergency Clean-up Response Time	Maximum 30-minute response for spills or contamination in critical areas
Client Satisfaction	≥ 90% positive feedback from cleanliness and hygiene-related surveys

 
5. Health Information Record Unit
The Health Information Record Unit is responsible for the creation, maintenance, storage, and protection of all patient medical records at the Federal Neuro-Psychiatric Hospital, Kaduna. This unit ensures that all clinical documentations generated by doctors, nurses, and other healthcare professionals are securely stored and readily available for authorised medical, academic, and administrative use.
The unit manages both physical and electronic health records (EHR), using a specialised electronic health record management system to capture, access, update, and share patient data in real-time across hospital departments.
Strategically located near the General Outpatient Department (GOPD), Emergency Unit, Medical Outpatient Department (MOPD), and National Health Insurance Authority (NHIA) Clinic, the unit ensures seamless integration of medical documentation processes into clinical workflows.
The unit provides 24-hour services, 7 days a week, ensuring uninterrupted access to health records for both inpatient and outpatient services.
Key Services:
•	Patient registration and electronic health record creation
•	Record updates, appointment booking, and tracking
•	Secure storage of patient case notes and investigation results
•	Authorised retrieval of records for use by clinicians, management, researchers, and students
•	Confidentiality enforcement to protect patient privacy
Service Standards
Service Area	Standard / Benchmark
New Patient Registration	Completed within 5 minutes of arrival
Medical Record Retrieval Time (In-House)	<10 minutes for active patient files
Record Filing & Update	All documentation to be filed/updated within 12 hours of consultation
Availability of Records	100% availability of active case notes at the point of care
Access Authorisation Compliance	Zero tolerance for unauthorised access; 100% compliance with privacy policy
Digital System Uptime	Maintain ≥ 98% system uptime monthly.
Staff Training Frequency	Bi-annual training in electronic record management and data protection
Appointment Booking	All follow-up bookings are recorded before the patient leaves the clinic.
Turnaround Time for Record Requests	<24 hours for inter-departmental requests; 48 hours for external agencies
Record Retention Policy	Adheres to 10-year minimum retention for patient records, per national guidelines

 
6. Information and Protocol Unit
The Information and Protocol Unit plays a central role in managing the flow of information between the Federal Neuro-Psychiatric Hospital, Kaduna, and the public. The unit is responsible for ensuring effective internal and external communication, handling media relations, protocol duties, and promoting the hospital’s public image.
Its key responsibilities include:
•	Disseminating accurate and timely information to patients, clients, and the general public
•	Managing hospital events, visits, meetings, and official protocols
•	Coordinating media relations and digital presence
•	Handling public inquiries (in-person, phone, and online)
•	Managing the hospital’s online and social media platforms
•	Acting as the official front desk and customer inquiry service
The unit also serves as the information bridge between the hospital and its clients, ensuring patients and visitors have access to clear and helpful information on services and operations.
Location and Hours:
•	Office Location: First floor, main administrative building (centrally positioned for easy access)
•	Office Hours: Monday – Friday, 8:00 AM – 4:00 PM
•	Virtual Inquiry Support: Available 24 hours a day, 7 days a week via phone, WhatsApp, and email
Contact Information & Online Presence:
•	Website: www.fnphkaduna.com | www.fnphkaduna.gov.ng
•	Email: info@fnphkaduna.com
•	Instagram: @fnph_kaduna
•	Facebook: @fnphkaduna
•	YouTube: @fnphkad
Service Standards
Service Area	Standard / Benchmark
Walk-in Inquiry Response Time	All clients are attended to within 5 minutes of arrival.
Phone/WhatsApp Response Time	Initial response provided within 30 minutes (24/7 support)
Email Response Time	All emails acknowledged within 4 hours; full response within 24 hours
Public Information Accuracy Rate	100% accuracy in all official communication and publications
Social Media Updates	Minimum of 3 posts per week on official social media platforms
Website Uptime	Maintain ≥ 98% uptime for continuous information access.
Customer Satisfaction Rating	Maintain a minimum 85% positive feedback rating quarterly.
Event/Protocol Coordination Timeliness	All events and visits are organised with at least 48 hours’ notice and approval.
Front Desk Availability	100% availability during working hours (8 am–4 pm, Monday–Friday)
Communication Staff Training Frequency	Quarterly refresher training in PR, media handling, and client engagement

 
7. Intensive Care Unit (ICU)
The Intensive Care Unit (ICU) at the Federal Neuro-Psychiatric Hospital, Kaduna, is a specialised department dedicated to delivering advanced, life-saving care to critically ill or medically unstable patients. The unit is equipped with modern technology and staffed by a multidisciplinary team trained in critical care.
Goal: To stabilise and support patients with life-threatening illnesses or injuries, prevent further deterioration, and enhance their chances of recovery.
Core Functions:
•	Provide round-the-clock intensive medical monitoring and treatment
•	Administer specialised interventions such as mechanical ventilation, intravenous medications, and fluid therapy
•	Monitor vital signs using advanced medical equipment (e.g., cardiac monitors, ventilators, infusion pumps)
•	Deliver care through a coordinated team of intensivists, critical care nurses, anaesthetists, and respiratory therapists
Key Features:
•	Dedicated ICU beds with 24/7 availability
•	Individualised patient monitoring systems
•	Emergency response readiness
•	Adherence to international best practices in critical care
Operating Hours:
•	24 hours a day, 7 days a week
Service Standards
Service Area	Standard / Benchmark
ICU Bed Occupancy Rate	Maintain 85–90% optimal occupancy to ensure availability for emergency cases.
Patient-to-Nurse Ratio	Maintain a 1:1 or 1:2 nurse-to-patient ratio, depending on case severity.
Response Time for Emergency Admissions	Emergency patients are admitted and stabilised within 10 minutes of arrival.
Equipment Functionality Rate	≥ 98% equipment uptime (routine maintenance every month)
Clinical Rounds Frequency	Twice daily physician-led ward rounds with on-call access round-the-clock
Medication Administration Accuracy	100% compliance with physician prescription and double-check protocols
Infection Control Compliance	Maintain > 95% adherence to infection prevention and hand hygiene protocols.
Family Communication Updates	Family members are updated at least once daily, or as the patient's condition changes.
Training and Simulation for Staff	Quarterly training in advanced life support and critical care procedures
Emergency Response Drill Frequency	Bi-annual drills to assess ICU team emergency preparedness

 
8. Medical Laboratory Department
The Medical Laboratory Department provides a wide range of diagnostic services essential for accurate diagnosis, treatment planning, and disease prevention. It performs scientific investigations by analysing clinical specimens such as blood, tissue, and other bodily fluids. The laboratory supports clinicians in making evidence-based medical decisions through precise, reliable, and timely test results.
Core Services and Units
The department is structured into five (5) specialised units:
1.	Clinical Chemistry
2.	Medical Microbiology
3.	Haematology
4.	Blood Transfusion Services
5.	Molecular Biology
These units are operated by qualified laboratory scientists, technicians, and technologists using both manual and automated systems for improved efficiency and accuracy.
Operational Scope
•	Service Coverage: Available 24 hours a day, 7 days a week.
•	Satellite Laboratories: Located in the following key areas for accessibility and convenience: General Outpatient Department (GOPD), Medical Outpatient Department (MOPD), NHIA Clinic and Emergency Unit.
Electronic Systems
•	Test Requests and Reporting: All internal test requests are generated electronically from the doctors’ consulting rooms.
•	Result Delivery: Results are sent back electronically to the requesting department. For external patients, test results are provided manually within 1–2 hours, depending on test type.
Service Standards
Service Area	Standard / Benchmark
Turnaround time for routine tests	Within 2 hours for 90% of samples
Critical test result communication	Within 30 minutes of the result's availability
External patient service window	8:00 AM – 4:00 PM daily (manual result processing within 2 hours)
Equipment downtime	Maintained at <5% monthly to ensure consistent service availability
Staff responsiveness	At least 95% of staff respond to sample delivery within 5 minutes.
Sample rejection rate	Maintained below 1% through quality control measures
Staff qualification	100% of laboratory professionals hold relevant licenses and certifications

 
9. Medical Outpatient Department (MOPD)
The Medical Outpatient Department (MOPD) provides comprehensive healthcare services to patients who do not require inpatient admission. The department offers a wide range of medical services, including diagnosis, consultation, observation, treatment, rehabilitation, and wellness programs tailored to patient needs.
It is staffed by a multidisciplinary team comprising consultants, medical officers, nurses, and allied health professionals who deliver specialised and general medical care.
Scope of Services
•	Initial assessment and triaging
•	Vital signs monitoring
•	Consultations and specialist evaluations
•	Follow-up care and medical reviews
•	Preventive care and health education
•	Emergency stabilisation before admission (if needed)
All new patients are first triaged, followed by a vital signs assessment by nurses. Emergency cases are stabilised in the department before referral to appropriate wards or specialists.
Clinic Schedule
Day	Clinic Type
Monday	General Medical Clinic
Tuesday	Antenatal & General Medical Clinics
Wednesday	Neurology & General Medical Clinics
Thursday	General Medical Clinic
Friday	Cardiology & General Medical Clinics
Saturday	General Medical Clinic
Sunday	General Medical Clinic
Operational Hours: 24 hours a day, 7 days a week
Service Standards
Service Area	Standard / Benchmark
Patient triaging time	Within 10 minutes of arrival
Vital signs assessment	Completed within 15 minutes post-triage
Initial consultation wait time	Not more than 30 minutes after triage (non-emergency cases)
Emergency stabilisation response	Immediate attention, within 5 minutes of arrival
Average consultation time	15–30 minutes per patient, depending on complexity
Follow-up appointment scheduling	Within 7 days for stable cases; 24–48 hours for acute cases
Patient satisfaction rating	Maintain a minimum 85% satisfaction score on quarterly surveys.
Clinic capacity utilisation	Ensure at least 90% daily coverage by available consultants/specialists.
Documentation and records update	100% of patient records updated before the close of each clinic day

 
10. Medical Services Department 
The Medical Services Department provides a comprehensive range of medical and psychosocial interventions to treat and support individuals with mental health conditions. These services include psychiatric evaluations, medication management, therapy, and support groups. Our department is dedicated to delivering specialised, high-quality mental health and psychological services to both in-patients and out-patients across our hospital-designated clinics and remote communities within Kaduna State and its environs, including primary and secondary health facilities.
Specialised Services Offered: Addiction Psychiatry, Child and Adolescent Psychiatry, Community Psychiatry, Emergency Psychiatry, Forensic Psychiatry, General Adult Psychiatry, Geriatric Psychiatry, and Psychotherapy.
Emergency Psychiatry Services: The Emergency Psychiatry Unit delivers immediate care for individuals experiencing mental health crises. Our clinical team, comprised of doctors and nurses, conducts rapid assessments, differentiates between medical and psychiatric causes of distress, and initiates the appropriate treatment. Primary goals include ensuring patient and public safety, employing de-escalation techniques, and administering medication or seclusion when necessary.
The Emergency Unit consists of two main sections: 
Assessment Unit: Manages all first-time patients through triage and evaluation. Based on clinical findings, patients may be managed on an outpatient basis, referred for follow-up, admitted to the emergency ward or inpatient facility, or transferred to specialised clinics.  
Emergency Ward: Provides acute care to patients requiring immediate admission.
Emergency Unit Patient Process Flow – Step-by-Step (New Patients)
1.    Arrival: New patients pick a tally/number upon arrival in the morning.
2.	Triage by Doctor: Initial clinical assessment to determine medical condition or the need for referral to a specialist clinic or MOPD.
3.	Payment & Registration: Payment at the Cashier Point (Pay Point Cubicles) and proceed for Registration or update of records at the Health Information Management Unit (H.I.M.U) cubicles.
4.	Nursing Station: Vital signs are taken, and the patient is prepared for consultation.
5.	Doctor’s Consultation: Comprehensive clinical evaluation and treatment planning.
Post-Consultation Patient Pathways: A. Out-Patient Care: Diagnostic Investigations (Laboratory, ECG, EEG, Psychotherapy) - Medication Dispensation (Pharmacy) - Follow-Up Scheduling (via H.I.M.U) – Discharge to go home to return for outpatient department (GOPD) care.
B. In-Patient Care: Advanced Investigations - Nursing Pre-Admission Procedures - Further Treatment and Pharmacy Services - Transfer to Relevant Ward
General Out-Patient Department (GOPD) Patient Flow Process
1.	Start at H.I.M.U: Retrieval, Registration, and creation of patient records
2.	Proceed to the Cashier Point: Payment for consultation fees 
3.	Nursing Station: vital signs
4.	Doctor’s Consultation: Assessment and clinical decision-making
Post-Consultation Options: 
A. Outpatient Care: For medication or psychological services
B. Inpatient Care: Admission and further investigations
C. Pharmacy: For medication pickup 
D. H.I.M.U: For follow-up documentation
E. Discharge: If no further treatment is required
GOPD Clinics Schedule: - 
•	Monday: General Adult Psychiatry/Psychotherapy; Child & Adolescent Psychiatry
•	Tuesday: Forensic Psychiatry; General Adult Psychiatry
•	Wednesday: Neurology Clinic
•	Thursday: Substance Abuse / Rehabilitation; Psychogeriatric
•	Friday: Community Psychiatry; Child & Adolescent Psychiatry
Service Standards
Service Component	Standard Benchmark
Patient Triage Time	Within 30 minutes of arrival
Registration & Record Entry	Within 15 minutes post-payment
Initial Doctor Consultation	Within 1 hour of triage
Emergency Response Activation	Within 10 minutes for psychiatric emergencies
Follow-up Appointment Scheduling	The same day after the consultation
Medication Dispensation	Within 30 minutes of prescription submission
Diagnostic Result Turnaround	Within 24 hours (except specialised tests)
Admission Processing Time	Within 2 hours after the doctor’s admission order
Patient Satisfaction (Target Score)	90% and above based on periodic survey results
Service Accessibility	95% uptime of GOPD and Emergency units during workdays

Commitment to Quality and Consistency - We are committed to providing patient-centred, compassionate care. Ensuring timely access to quality mental health services. Continuous monitoring of service delivery metrics to meet benchmarks. Ongoing staff training and community outreach to support holistic care.
 
11. National Health Insurance Authority (NHIA) Unit/Clinic
The National Health Insurance Authority (NHIA) Unit is dedicated to providing accessible, efficient, and quality healthcare services to NHIA enrolees. Services offered include primary and secondary care, and in some cases, tertiary care for patients requiring specialist referrals.
The unit operates a fully functional 9-bed facility, delivering 24-hour services, seven days a week.
Services Provided:
•	Family Medicine
•	Maternity Care
•	Dialysis Services
•	Neurology Services
•	Preventive Care: Immunisations, Health Education
•	Family Planning
•	Antenatal and Postnatal Care
•	General and Specialist Consultations (Physicians, Psychiatrists, Paediatricians, General Surgeons)
Patient Onboarding Process:
1.	NHIA Admin Office – Initial documentation (completed in under 5 minutes per patient).
2.	Health Information Management (HIM) Unit – Electronic patient registration (also completed in under 1 minute).
3.	Consultation and Care Delivery – Patients are directed to appropriate departments for care based on need.
Clinic Schedule:
Day	Available Clinics
Monday	General Medical Clinic
Tuesday	Antenatal Clinic, General Medical Clinic
Wednesday	Neurology Clinic, General Medical Clinic
Thursday	General Medical Clinic
Friday	Psychiatry Clinic, Child & Adolescent Clinic, Family Planning Clinic
Saturday	General Medical Clinic
Sunday	General Medical Clinic

Service Standards
Service Area	Standard/Benchmark
Patient Documentation	Completed within 1 minute at NHIA Admin Office
Registration (HIM Unit)	Completed within 1 minute
Waiting Time (Consultation)	First contact with the doctor within 30 minutes of arrival
Clinic Hours	24 hours, 7 days a week
Patient Satisfaction	≥ 90% positive rating from monthly feedback surveys
Triage & Emergency Handling	Immediate triage for critical cases within 5 minutes
Consultation Duration	Average of 15–20 minutes per patient
Pharmacy Fulfilment	90% of prescribed medications are dispensed within 30 minutes
Bed Occupancy Turnover	Maintain ≤ 85% average occupancy to ensure bed availability.
Referral Processing Time	Specialist referral confirmation within 1 business day
 
12. Neurology Clinic
The Neurology Clinic specialises in the diagnosis, treatment, and management of disorders affecting the brain, spinal cord, and peripheral nervous system. Conditions commonly treated include:
•	Stroke
•	Epilepsy
•	Multiple Sclerosis
•	Neuropathy
•	Headaches and Migraines
•	Movement Disorders (e.g., Parkinson’s disease)
The clinic employs a multidisciplinary approach, incorporating medication management, physical therapy, neurological evaluations, and referral for surgical intervention when required.
Clinic Operations:
•	Clinic Day: Wednesday
•	Clinic Hours: 8:00 AM – 4:00 PM
•	Excludes: Public holidays
•	Staffing: Led by a dedicated Consultant Neurologist, supported by trained medical officers, nurses, and support staff
Service Standards
Service Area	Standard/Benchmark
Clinic Start Time	Clinic begins promptly at 8:00 AM.
Patient Registration Time	Completed within 10 minutes of arrival
Consultation Waiting Time	Patients seen within 30 minutes of registration (except emergency cases)
Average Consultation Duration	20–30 minutes per patient, depending on case complexity
Diagnosis Turnaround Time	Preliminary diagnosis provided during first visit, or within 48 hours
Medication Access	90% of neurology prescriptions are filled at the in-house pharmacy within 30 minutes
Referral for Imaging/Tests	Referral issued same day; imaging scheduled within 3–5 working days
Follow-up Appointment Booking	Scheduled before the patient leaves; completed within 5 minutes at HIMU
Clinic Capacity	A minimum of 20 patients attended per clinic day
Patient Satisfaction	≥ 90% satisfaction based on quarterly feedback surveys

 
13. Nursing Services Department
The Nursing Services Department delivers specialised psychiatric nursing care tailored to individuals facing diverse mental health and behavioural challenges. The department plays a pivotal role in both clinical and supportive care across all patient touchpoints—whether in outpatient clinics, emergency settings, or inpatient wards.
Scope of Services
Nursing services include:
•	Patient Assessment and Observation
•	Individualised Treatment Planning
•	Medication Administration and Monitoring
•	Crisis Intervention and De-escalation
•	Counselling and Psychoeducation
•	Case Management and Referral Coordination
•	Therapeutic Group Activities
•	Family Support and Education
Nurses provide essential support to patients with various psychiatric disorders, mental health issues, and behavioural problems. Their core mission is to promote the physical, psychological, and psychosocial well-being of each patient.
Nursing teams are strategically deployed across all clinical areas, including:
•	Emergency Unit
•	Inpatient Wards
•	Outpatient Clinics
•	Neurology Clinic
•	Occupational Therapy Unit
•	Intensive Care Unit (ICU)
•	EEG/ECT Units



Roles in Patient Flow
•	Emergency Unit: Nurses assist in triage for new patients. If a patient presents with a non-psychiatric illness, Doctors refer the patient to the Medical Outpatient Department (MOPD) for appropriate care.
•	Admissions: Nurses are directly responsible for managing pre-admission procedures when patients are recommended for hospitalisation by a doctor.
•	Ongoing Care: Nurses continue to monitor, support, and implement treatment interventions throughout a patient’s stay or outpatient journey.
Service Standards
Service Area	Standard/Benchmark
Triage Waiting Time	New patients triaged within 15 minutes of arrival at the Emergency Unit.
Admission Preparation Time	Completed within 30 minutes after the doctor's recommendation
Medication Administration Accuracy	100% adherence to prescription protocol; zero medication errors
Vital Signs Monitoring	Monitored every 6 hours for inpatients or as clinically indicated
Crisis Response Time	Response initiated within 5 minutes of reported psychiatric emergency.
Patient Education Sessions	Offered to 100% of inpatients within 72 hours of admission
Documentation Completion Time	Patient records are updated within 10 minutes of every clinical activity.
Therapeutic Group Activities	Minimum of 3 group sessions per week per ward
Family Involvement Rate	At least 80% of cases involve caregiver education and support before discharge.
Staff-to-Patient Ratio	Maintained at 1 nurse per 6 patients for general wards; 1:3 for ICU
Nursing Rounds	Conducted twice daily in all inpatient wards
Patient Satisfaction Target	≥ 90% satisfaction on quarterly service evaluations

Commitment to Quality - Our nurses operate under a patient-centred care model, ensuring compassion, respect, and clinical excellence. Through continuous training, interdisciplinary collaboration, and evidence-based practices, the Nursing Services Department maintains high standards of care delivery across the hospital.
 
14. Occupational Therapy (OT) Unit
The Occupational Therapy (OT) Unit at the Federal Neuro-Psychiatric Hospital, Kaduna, is a vital component of rehabilitative care. It focuses on the therapeutic use of purposeful, medically prescribed activities to help individuals with physical, emotional, or psychiatric impairments achieve optimal functioning and independence in daily life.
The OT Unit provides support for individuals with mental health challenges, physical disabilities, and psychosocial difficulties, empowering them to recover, develop, and maintain essential life and work skills.
Core Objectives
Occupational therapy aims to:
•	Restore motor and cognitive skills
•	Improve sensory integration and emotional regulation
•	Develop daily living and vocational skills
•	Enhance independence in self-care, work, education, and recreation
OT interventions are evidence-based and patient-centred, enabling clients to function meaningfully in their communities despite impairments, disabilities, or handicaps.
Services Offered
Clients participate in skill-building and therapy activities, including but not limited to:
•	Tailoring and Shoe Making
•	Hair Dressing and Barbing
•	Knitting and Bag Making
•	Bead Making and Cap Making
•	Catering and Cosmetics Production
•	Tie and Dye
•	Art and Craft
•	Hand and Machine Embroidery
•	ICT Training
•	Vehicle Service Bay
•	Woodwork and Welding
•	Mini Shop Management
•	Sports and Recreational Activities
Operational Hours
•	Days: Monday to Friday
•	Time: 8:00 AM – 4:00 PM
•	Closed on: Public holidays and weekends
Client Categories and Access
•	Internal Clients (Patients):
Referred by medical or nursing staff as part of clinical treatment or rehabilitation.
•	External Clients (Community Learners):
Individuals from outside the hospital may enrol to acquire vocational skills.
Process for External Clients:
1.	Registration – Basic data and contact information are collected.
2.	Orientation Session – Clients are introduced to available programs and guided on choosing a suitable skill.
3.	Program Enrollment – Clients choose to attend daily or on selected weekdays.
Program Duration and Completion
•	Standard Duration: 3 months per skill
•	Possible Extension: Up to 3 additional months, based on skill type or learning capacity
•	Maximum Duration: 12 months
•	Post-Program Support: Follow-up communication to ensure continuity and support post-rehabilitation
Service Standards
Service Area	Standard / Benchmark
Client Onboarding Duration	Orientation and enrollment are completed within 1 working day.
Program Start Time	All training programs begin by 9:00 AM daily.
Staff-to-Client Ratio	1 occupational therapist/instructor per 8 clients
Attendance Monitoring	Minimum 75% attendance required for successful completion
Client Satisfaction Target	≥ 90% satisfaction rate from feedback forms
Follow-up Contact Post-Program	Made within 30 days of program completion
Skill Completion Rate	≥ 85% of enrolled clients complete their selected skill within 3–6 months
Referral Acknowledgement Time	OT referral from clinicians was acted upon within 24 hours.
Internal-External Client Ratio	Maintain at least a 60% internal to 40% external participation balance.
Functional Progress Assessments	Conducted monthly for all participating clients
Annual Enrollment Capacity	Accommodates up to 300 clients annually across all programs

Commitment to Quality and Inclusion - The OT Unit fosters a therapeutic environment that prioritises functionality, dignity, and inclusivity. Services are delivered by trained occupational therapists, vocational instructors, and rehabilitation assistants using evidence-based practices aligned with international standards.

 
15. Pharmacy Department
The Pharmacy Department at the Federal Neuro-Psychiatric Hospital, Kaduna, plays a critical role in the management of patient care by ensuring the safe, effective, and appropriate use of medications. Pharmacists collaborate with psychiatrists, doctors, nurses, and other healthcare professionals to optimise medication therapy, prevent adverse drug events, and enhance treatment outcomes across all patient care settings.
Core Functions and Responsibilities
•	Medication Therapy Management (MTM): Pharmacists review, monitor, and optimise drug regimens to improve treatment efficacy and minimise adverse effects.
•	Patient Education and Counselling: Patients and their caregivers are educated about the purpose, dosage, side effects, and storage of prescribed medications.
•	Drug Interaction and Allergy Checks: Identification and mitigation of potential drug interactions or contraindications through real-time screening.
•	Collaboration with Care Teams: Participation in ward rounds and multidisciplinary reviews to align pharmaceutical care with clinical goals.
•	Production of Hospital Consumables: In-house production of essential hygiene items such as: Liquid soap, Hand sanitisers, Methylated spirit, Chloroxylenol (Dettol), Sodium thiosulfate (Hypo).
Service Locations
Pharmacy services are available at the following points of care:
•	Medical Outpatient Department (MOPD)
•	General Outpatient Department (GOPD)
•	Emergency Unit
•	NHIA Clinic
•	Inpatient Wards


Patient-Centred Drug Access Process
1.	Electronic Prescription: The Doctor enters the prescription into the hospital system.
2.	Pharmacy Review: Pharmacist reviews, bills, and sends the prescription to the patient or relative for payment confirmation.
3.	Payment and Receipt: Payment is made electronically. A receipt is generated and presented at the pharmacy window.
4.	Medication Dispensation: The pharmacist verifies the receipt and dispenses medication with appropriate counselling.
Total processing time per prescription: Not more than 5 minutes
Additional Services
•	Drug Information and Counselling Office: Patients with complaints or inquiries about their medications are referred here for expert guidance.
•	Bulk Store and Inventory Control: Stocks medications to meet at least 3 months of hospital-wide pharmaceutical needs.
Operational Hours
•	24 Hours a Day
•	7 Days a Week
•	365 Days a Year
Service Standards
Service Area	Benchmark / Expectation
Prescription Processing Time	≤ 5 minutes from receipt to dispensation
Medication Availability Rate	≥ 95% drug availability at all times
Patient Counselling Coverage	100% of patients receiving new prescriptions must be counselled
Pharmacist-to-Patient Ratio	1 pharmacist per 30 outpatients per shift
Drug Stock Replenishment Frequency	Every quarter (3 months) or as needed, based on consumption rate
Response Time for Drug Complaint Resolution	Within 24 hours of submission
In-House Production Replenishment Cycle	Every 30 days or earlier, depending on usage
Medication Error Rate	<1% across all dispensing points
Bulk Drug Stock Duration	Must maintain a minimum of a 90-day stock for essential drugs
Availability at Points of Care	100% presence in all major care points: Emergency, NHIA, GOPD, MOPD, wards

Commitment to Excellence - The Pharmacy Department remains committed to:
•	Enhancing medication safety
•	Promoting treatment compliance
•	Supporting multidisciplinary care plans
•	Maintaining the highest standards of pharmaceutical practice


 
16. Radiodiagnostic Unit
The Radiodiagnostic Unit of Federal Neuro-Psychiatric Hospital, Kaduna, offers specialised diagnostic imaging services using advanced medical technologies to assist in the accurate diagnosis and management of various health conditions. It is equipped with modern imaging tools such as Optima X-ray machines and ultrasound systems, and operated by a team of skilled radiologists, radiographers, and support personnel.
Core Responsibilities and Services
The unit is responsible for visualising internal organs, tissues, and bone structures to aid accurate diagnosis, monitor disease progression, and support treatment decisions
Imaging Services Offered
•	General Radiography (X-rays): Skull, chest, spine, joints (ankle, knee, elbow)
•	Ultrasound Scans: Abdomen, pelvis, breast, thyroid, and brain
•	Special Procedures:
o	Intravenous Urography (IVU) – For urinary tract imaging
o	Retrograde Urethrogram (RUG) – For urethral assessment
o	Hysterosalpingography (HSG) – For evaluating the female reproductive tract
o	Micturating Cystourethrogram (MCUG) – For bladder and urethra studies
Operating Hours
•	Daily Service: Monday to Sunday
•	Time: 8:00 AM – 4:00 PM
•	Location: Radiodiagnostic Suite, Main Diagnostic Wing
Patient Categories
•	In-hospital referrals (Emergency, MOPD, GOPD, NHIA)
•	External referrals from surrounding hospitals and clinics
Patient Process Flow
1.	Electronic Registration at the unit
2.	Service Request Validation (referral confirmation)
3.	Payment made based on the specific service required
4.	Imaging Procedure performed by qualified personnel
5.	Image Review & Reporting by Consultant Radiologist
Average time from registration to procedure completion: <10 minutes
Turnaround Time for Specific Examinations
Examination Type	Estimated Completion Time
IVU	1 hour
RUG	30 minutes
HSG	30 minutes
MCUG	30 minutes
Regular X-rays	5 minutes
Ultrasound Scans	10–15 minutes
Personnel:
•	1 Consultant Radiologist
•	Radiographers and Technicians
•	Administrative Support Staff
Service Standards
Standard Area	Benchmark / Target
Registration for procedure time	<10 minutes for standard exams
Result availability time (routine X-ray)	≤5 minutes
Result availability time (special exams)	30–60 minutes, depending on procedure
Equipment availability	100% uptime during working hours
Radiologist-to-patient ratio	1:30 patients per day per radiologist
Patient satisfaction (service rating)	≥ 90% positive feedback from the exit survey
Report error rate	<1%
Daily capacity (all modalities)	Minimum 50 patients/day

Commitment to Care - The Radio-diagnostic Unit remains dedicated to delivering:
•	Accurate imaging reports
•	Timely diagnostics
•	Safe radiation practices
•	High patient satisfaction
This ensures that both in-house and external patients receive world-class diagnostic care that supports the hospital's broader mission of excellence in mental and physical healthcare.
 
17. Revenue and Account Unit
The Revenue and Accounts Unit is responsible for managing financial transactions related to healthcare services rendered within the hospital. It serves as the financial backbone of the institution, ensuring prompt and accurate payment processing, billing, and revenue tracking across all service departments.
Core Responsibilities
•	Payment Processing: Accepts and processes payments for all services rendered across departments (consultations, investigations, admissions, medications, etc.).
•	Billing Services: Prepares, issues, and verifies service bills for patients and clients.
•	Receipt Issuance: Generates official receipts for all payments made.
•	Revenue Tracking: Monitors, reconciles, and reports daily cash inflows and service-specific earnings.
•	Financial Record-Keeping: Maintains secure, up-to-date payment records for auditing and reconciliation purposes.
Service Access Points
Revenue and Accounts staff are stationed across key areas of the hospital to facilitate payment and billing services, including:
•	Emergency Unit
•	General Outpatient Department (GOPD)
•	Medical Outpatient Department (MOPD)
•	NHIA Clinic
•	Pharmacy
•	Laboratory
•	Radio-diagnostic Unit
Operating Hours
•	Availability: 24 hours a day, 7 days a week
•	Peak Hours: 8:00 AM – 4:00 PM (weekdays), with full coverage during off-peak hours and weekends
•	Emergency Coverage: Continuous presence at Emergency and Pharmacy points
Modes of Payment Accepted
•	Cash
•	POS/Bank Card Transactions
•	Electronic Transfers (upon confirmation)
•	NHIA Authorisations (for insured patients)
•	HMO-authorised payments (where applicable)
Service Standards
Service Category	Benchmark / Standard
Payment processing time	≤ 3 minutes per patient
Receipt issuance after payment	Immediate (≤ 1 minute)
Billing query resolution time	≤ 10 minutes
Cash reconciliation report	Daily by 8:00 PM
Customer satisfaction rate	≥ 90% (via quarterly survey)
Revenue posting to the account system	Real-time or within 1 hour of the transaction
Error rate in billing	<1% per audit cycle
Staff availability	100% coverage during working hours
Response to refund or correction requests	≤ 2 working days
Commitment to Excellence - The Revenue and Accounts Unit is committed to:
•	Transparent and accountable financial services
•	Timely and accurate billing and payment support
•	Seamless integration with electronic health and payment systems
•	High responsiveness to patient financial inquiries 
18. Social Works Department
The Social Works Department at Federal Neuro-Psychiatric Hospital, Kaduna, provides essential emotional, social, and practical support to patients and their families. The department plays a pivotal role in addressing the psychosocial needs of service users, bridging the gap between medical treatment and social reintegration, and enhancing patient well-being and recovery outcomes.
Core Services
•	Psychosocial Counselling and Therapy: Emotional and psychological support to help patients cope with illness, stigma, or trauma.
•	Discharge Planning and Follow-Up: Coordination of safe and effective discharge, including continuity of care through home visits or telephone calls.
•	Patient Relations Support: Assists in resolving family or relational concerns affecting treatment adherence or recovery.
•	Repatriation Services: Facilitates return of patients to their home states or countries (when necessary), including liaising with family and state agencies.
•	Family Therapy: Provides therapeutic support to families dealing with the emotional burden of mental illness.
•	Social Investigation and Intervention: Conducts comprehensive assessments to understand social, economic, and cultural factors impacting patient care.
•	Support for Destitute Patients: Collaborates with the State Ministry of Human Services to assist patients who are homeless or abandoned.
•	Contact Tracing and Home Visits: Visits patient homes or contacts families for treatment continuity and reintegration purposes.
Operating Hours
•	Days: Monday to Sunday
•	Time: 8:00 AM – 8:00 PM daily
•	Emergency Coverage: On-call support may be activated via clinical referral
Referral Sources
•	In-house referrals from Doctors, Nurses, or Ward Rounds
•	State Ministries (e.g., Kaduna State Ministry of Human Services)
•	Patient self-report or caregiver request
Service Standards
Service Category	Standard / Benchmark
Time to respond to referrals	≤ 1 hour for internal referrals
Counselling sessions per patient	Min. 2 sessions per week (as clinically indicated)
Repatriation processing	Within 3 working days after documentation
Discharge planning completion	≥ 95% before the patient leaves the facility
Family therapy session frequency	1–2 sessions per month (or as needed)
Social investigation report turnaround	Within 24–48 hours after assessment
Home visit follow-ups	100% of priority discharge patients within 7 days
Case documentation compliance	≥ 98% accuracy rate
Client satisfaction rating	≥ 90% in periodic surveys

Commitment to Care - The Social Work Department is committed to:
•	Empowering patients and families through education, advocacy, and psychosocial support
•	Strengthening discharge success through strong follow-up and referral networks
•	Promoting dignity, equity, and inclusion for vulnerable populations

 
3.3 Training Mandate
Training is one of the core mandates of the Federal Neuro-Psychiatric Hospital, Kaduna. It encompasses a well-structured, continuous process of learning and professional development aimed at equipping individuals with the knowledge, skills, and competencies necessary for effective practice in the mental health and healthcare professions.
The hospital is committed to fostering excellence in training across various fields, with particular emphasis on mental healthcare delivery, clinical practice, nursing, and digital literacy. The following key training programmes are offered:
Residency Training Programme: Designed for medical doctors pursuing specialisation in psychiatry. This programme is accredited by relevant professional bodies and provides hands-on clinical experience, academic instruction, and mentorship to develop competent consultant psychiatrists.
Post Basic Psychiatric Nursing Training: This programme is targeted at registered nurses who wish to specialise in psychiatric nursing. It includes theoretical coursework, practical exposure, and mental health community outreach, preparing nurses to provide specialised care to individuals with mental health conditions.
Other Professional Mental Health Training: The hospital offers tailored professional training programmes for psychologists, social workers, occupational therapists, and allied health professionals involved in mental health service delivery.
Information and Communication Technology (ICT) Training: Recognising the importance of digital skills in modern healthcare, the hospital also provides ICT training to staff, students, and selected patients. The goal is to enhance digital literacy, promote data management efficiency, and facilitate the integration of technology in mental health care services.
Training Departments/Units at FNPH Kaduna are:
1.	Clinical Services Department: Coordinates clinical training for resident doctors, medical students, and other healthcare trainees. It ensures accreditation, supervises clinical postings, and facilitates practical rotations in psychiatry and related disciplines.
2.	School of Post Basic Psychiatric Nursing: Provides formal education and hands-on training for nurses specialising in psychiatric nursing. The school is equipped with classrooms, demonstration labs, a library annexe, and hostel facilities to support learning and student welfare.
3.	Information and Communication Technology (ICT) Unit: Offers structured ICT training for internal staff, students, and selected patients undergoing rehabilitation. The unit plays a crucial role in digitising hospital operations, electronic health records management, and enhancing capacity for modern healthcare delivery.
 
3.4 Research Mandate
Research is a critical pillar of the Federal Neuro-Psychiatric Hospital, Kaduna's core mandates. It serves as a systematic and rigorous process aimed at discovering, interpreting, and refining facts, theories, data, applications, and best practices in mental health care. Research helps generate new knowledge and deepen understanding of existing practices, ultimately leading to improved healthcare outcomes.
At FNPH Kaduna, the primary focus of our research activities is on mental health challenges. This includes investigating the causes, diagnosis, treatment, and prevention of mental health disorders, as well as exploring innovative approaches to service delivery. Through continuous research efforts, the hospital aims to improve the quality of life for individuals living with mental illness and to provide evidence-based, patient-centred mental healthcare services.
Incorporating research into our institutional framework not only enhances clinical practice and service delivery but also contributes to national and global knowledge on mental health. It empowers professionals to remain at the forefront of scientific and clinical advancements.
Research Departments/Units at FNPH Kaduna are:
1.	Grants and Collaboration Unit: This unit is responsible for identifying, applying for, and managing research grants from government agencies, international bodies, NGOs, and private institutions. It also fosters partnerships and collaborative research initiatives with academic institutions, healthcare organisations, and development partners.
2.	Medical Library Department: The medical library supports research activities by providing access to up-to-date scientific literature, journals, textbooks, and online databases such as PubMed and Medline. It serves both staff and students, offering resources needed for research development, evidence-based practice, and academic study.
3.	Research Unit: The dedicated Research Unit oversees the development and implementation of all research activities within the hospital. This includes ethical clearance, protocol review, approval of student projects, coordination of investigator-led research, data analysis, and publication. It ensures that all research conducted meets ethical standards and contributes meaningfully to the advancement of mental healthcare. 
CHAPTER FOUR: Mutual Expectations for Service Excellence
4.1 Users’ Expectations from the Hospital
As a service-oriented institution committed to delivering world-class mental healthcare, the Federal Neuro-Psychiatric Hospital, Kaduna, recognises its responsibility to meet the expectations of its patients, caregivers, and service users. We believe that empowering service users with knowledge of their rights and entitlements enhances trust, promotes engagement, and supports positive health outcomes.
Below are the core expectations that patients and caregivers can reasonably have when accessing services at FNPH Kaduna:
1.	Right to Quality Treatment: Patients and caregivers are entitled to receive quality medical care that meets established professional standards, including accurate diagnosis and appropriate, effective treatment.
2.	Competent and Skilled Professionals: All service users should expect to be attended to by qualified, experienced, and well-trained mental health professionals.
3.	Clear and Timely Information: Patients have the right to receive clear, understandable information regarding their condition, prescribed medications, treatment plans, and anticipated outcomes.
4.	Prompt Attention: Patients should be attended to promptly and without unnecessary delays, especially in cases of emergency.
5.	Confidentiality: Personal health information will be kept strictly confidential and shared only with authorised personnel for care.
6.	Clean and Safe Environment: Service users can expect to receive care in a clean, safe, and comfortable environment that promotes healing and well-being.
7.	Respect for Privacy: All patients will be treated with respect, and their privacy will be maintained at every stage of their care.
8.	Efficient Administrative Procedures: Registration, documentation, and admission processes will be carried out professionally and efficiently.
9.	Transparent Billing: Patients should be provided with transparent billing processes, free of hidden charges or any form of exploitation.
10.	Empathetic Service: All staff are expected to display compassion, patience, and understanding while attending to patients and caregivers.
11.	Right to Complain: Service users have the right to report dissatisfaction or file complaints regarding any aspect of service delivery without fear of victimisation.
12.	Cultural and Religious Sensitivity: The hospital respects the cultural, religious, and personal values of all patients and caregivers and incorporates them into care when appropriate.
4.2 Hospital Expectations from Patients and Caregivers
To facilitate a smooth and effective care experience, the hospital expects service users to also uphold certain responsibilities. These include:
1.	Respect for Hospital Policies: Patients and caregivers are expected to respect hospital rules, guidelines, and the authority of hospital personnel.
2.	Prohibited Items: Possession of sharp, harmful, or dangerous objects within the hospital premises is strictly prohibited.
3.	Drug-Free Environment: FNPH Kaduna is a public institution. Therefore, smoking, drug abuse, and the sale or use of illicit substances are strictly forbidden.
4.	Honest and Complete Information: Patients and caregivers must provide accurate and complete health information to support appropriate diagnosis and treatment.
5.	Adherence to Treatment: Patients are expected to follow prescribed treatment plans and medical advice from healthcare professionals.
6.	Avoid Sharing Medications: Since treatments are individualised, patients must not share medications with others under any circumstances.
7.	Punctuality and Attendance: Patients should attend scheduled appointments and arrive on time for consultations or follow-up visits.
8.	Orderly Conduct: Patients are expected to wait their turn patiently and behave respectfully toward other service users and staff.
9.	Financial Responsibility: Service users should ensure timely and accurate payments for services through the correct channels.
10.	Support for Cleanliness: Patients and visitors must help maintain a clean and hygienic hospital environment.
11.	Constructive Feedback: Patients are encouraged to share feedback, suggestions, or complaints respectfully to help improve services.
12.	Respect for Staff: Patients and caregivers must respect all staff members and use formal grievance procedures if dissatisfied, rather than engaging in confrontational behaviour.
4.3 Staff Expectations from Management
To maintain high performance and morale, staff at FNPH Kaduna reasonably expect the following from hospital leadership:
•	Strong, approachable, and effective leadership.
•	Clear and timely communication from management.
•	Safe, ergonomic, and well-equipped workspaces.
•	Constructive feedback for performance improvement.
•	Recognition and rewards for exceptional service.
•	Access to up-to-date tools, equipment, and resources.
•	Opportunities for continuous professional development.
•	A functional and reliable IT infrastructure.
•	Adequate supplies and materials to carry out duties efficiently.
•	Supportive and responsive administrative systems.
4.4 Management Expectations from Staff
In return, management expects staff to exhibit professionalism and commitment in the following ways:
•	Adherence to hospital policies, ethics, and guidelines.
•	Provision of compassionate, patient-centred care.
•	Teamwork and collaboration across departments.
•	Consistent display of good conduct and integrity.
•	Punctuality and presence at duty posts as scheduled.
•	Commitment to ongoing learning and development.
•	Confidentiality in handling patient and organisational information.
•	Respectful and empathetic treatment of all patients.
 
CHAPTER FIVE: GRIEVANCE REDRESS, FEEDBACK, MONITORING, AND SERVICE SCOPE
5.1 Grievance Redress Channels
At the Federal Neuro-Psychiatric Hospital, Kaduna (FNPH Kaduna), patient satisfaction is one of our highest priorities. Our service users—patients, caregivers, and family members—are our key stakeholders in promoting, improving, and advocating for quality mental healthcare. We are deeply committed to providing compassionate, responsive, and professional services while empathising with your emotions, experiences, and challenges.
To that end, we have established multiple channels for lodging complaints, reporting dissatisfaction, or providing suggestions regarding the quality of services received. Patients, caregivers, and visitors can use any of the following methods:
•	In-Person Complaints: You may report any concerns directly to any hospital staff member or to our SERVICOM officials, who can be easily identified by their orange reflective vests bearing the SERVICOM logo.
•	SERVICOM Cubicle: A dedicated SERVICOM desk is located at the General Outpatient Department (GOPD)/Emergency Complex for ease of access.
•	SERVICOM Office: For more formal complaints, the SERVICOM office is situated at the Senior Citizens’ Villa, where patients or their relatives can speak confidentially with officials about service delivery concerns or lapses.
•	Friendly Environment for Engagement: The hospital provides a serene and welcoming environment. Our staff are always available and happy to engage in meaningful dialogue to help us serve you better.
•	WhatsApp Numbers for Direct Messaging: You can send messages or complaints directly via WhatsApp to the following numbers:
 0802 945 2013, 0803 833 6660 or 0803 447 2893
•	Email Complaints: You can also submit feedback or complaints via email to our official SERVICOM address: servicom@fnphkaduna.com
5.2 Feedback
Patients who submit complaints are more likely to receive immediate feedback from SERVICOM desk officers. However, if immediate resolution is not possible, the case may be escalated to a senior officer for further attention. The patient will then be contacted using their provided details to ensure follow-up and closure of the matter.
5.3 Monitoring and Evaluation
FNPH Kaduna operates a comprehensive monitoring and evaluation (M&E) system to ensure that services, especially within clinical areas, meet high standards of quality and value for money.
As part of this commitment:
•	We encourage all patients to participate in our surveys distributed via Google Forms, which assess satisfaction levels and awareness of SERVICOM services.
•	These surveys are analysed monthly to identify areas of strength and opportunities for improvement.
To support a culture of accountability, the hospital implements a multi-layered performance monitoring mechanism using both quantitative (measurable data) and qualitative (observational and feedback-based) tools. These include:
Key Components:
1.	Key Performance Indicators (KPIs): These are measurable benchmarks aligned with our service pledge and defined service standards. KPIs help assess the hospital’s progress toward core objectives.
2.	Monitoring Tools and Methodologies: These include: SERVICOM Unit oversight, patient feedback and grievance channels, suggestion boxes at strategic locations, a dedicated customer service help desk and hotline, online feedback forms, and Patient satisfaction surveys distributed at discharge or during follow-up appointments.
This robust system ensures the FNPH Kaduna Service Charter remains a living document, one that continuously guides service improvement, encourages accountability, and enhances patient experience and treatment outcomes.
5.4 Review Period of the FNPH-Kaduna Service Charter
The Service Charter will be reviewed, updated, and republished every two years (biennially) or as the need arises. This ensures alignment with evolving policies, changing service delivery needs, and updates to federal civil service regulations. The goal remains unwavering: to continually provide efficient, compassionate, and high-quality mental health services to all Nigerians.

 
OUR SERVICES
FNPH Kaduna offers a wide range of specialised and general mental healthcare services designed to meet the diverse needs of individuals, families, and the wider community.
Core Clinical Services:
•	Amenity Care Services
•	Child & Adolescent Psychiatry
•	Community Psychiatry & Outreach Services
•	Diagnostic Laboratory Services
•	Drug Rehabilitation Services
•	Emergency Psychiatry
•	Forensic Psychiatry
•	General Psychiatry
•	Geriatric Psychiatry
•	Inpatient and Outpatient Care/Treatment
•	Occupational Therapy Services
•	Psychotherapy
•	Social Work Services
•	Substance Abuse Treatment & Rehabilitation
Advanced and Specialised Services:
•	Molecular Laboratory Services
•	Electroencephalography (EEG) & Electroconvulsive Therapy (ECT)
•	Electrocardiography (ECG)
•	Ultrasound Scanning & X-Ray Services
•	Dialysis Services
•	Intensive Care Services (ICU)
•	Family Medicine & Maternity Care
•	Specialist Consultations
•	Mental Health Research & Training
Supportive Services:
•	Crèche/Day-Care Services
•	Transportation Services


    };

    // Add message to chat
    function addMessage(message, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.className = isUser ? 'user-message' : 'bot-message';
        
        const messageParagraph = document.createElement('p');
        messageParagraph.textContent = message;
        messageDiv.appendChild(messageParagraph);
        
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Get bot response
    function getBotResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Greetings
        if (message.match(/^(hi|hello|hey)/)) {
            return "Hello! Welcome to GOLDBOND LABORATORIES. How can I help you today?";
        }
        
        // Thanks
        if (message.includes('thank')) {
            return "You're welcome! Is there anything else I can help you with?";
        }
        
        // Tests
        if (message.includes('test') || message.includes('available')) {
            return faqDatabase.tests;
        }
        
        // Booking
        if (message.includes('book') || message.includes('appointment')) {
            return faqDatabase.book;
        }
        
        // Results
        if (message.includes('result') || message.includes('timing') || message.includes('long')) {
            return faqDatabase.results;
        }
        
        // Hours
        if (message.includes('hour') || message.includes('time') || message.includes('open')) {
            return faqDatabase.hours;
        }
        
        // Home collection
        if (message.includes('home') || message.includes('collection')) {
            return faqDatabase.home;
        }
        
        // Reports
        if (message.includes('report') || message.includes('access')) {
            return faqDatabase.reports;
        }
        
        // Payment
        if (message.includes('payment') || message.includes('pay')) {
            return faqDatabase.payment;
        }
        
        // Accreditation
        if (message.includes('accredit') || message.includes('certified')) {
            return faqDatabase.accredited;
        }
        
        // Location
        if (message.includes('location') || message.includes('address') || message.includes('where')) {
            return faqDatabase.location;
        }
        
        // Cost
        if (message.includes('cost') || message.includes('price')) {
            return faqDatabase.cost;
        }
        
        // Default response
        return "I'm not sure about that, but I can help you with:\n• Available tests\n• Booking a test\n• Test results timing\n• Operating hours\n• Home collection\n• Report access\n• Payment methods\n• Our location\n\nOr contact us:\n📞 08035944767, 08023340925\n📧 info@goldbondlabs.com";
    }

    // Send message function
    function sendUserMessage() {
        const message = chatbotInput.value.trim();
        if (message === '') return;

        console.log('Sending message:', message);

        // Add user message
        addMessage(message, true);
        chatbotInput.value = '';

        // Show typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'bot-message';
        typingDiv.innerHTML = '<p>Typing...</p>';
        chatbotMessages.appendChild(typingDiv);

        // Get bot response after delay
        setTimeout(function() {
            typingDiv.remove();
            const response = getBotResponse(message);
            addMessage(response, false);
        }, 800);
    }

    // Send message on button click
    if (sendMessage) {
        sendMessage.addEventListener('click', sendUserMessage);
    }

    // Send message on Enter key
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendUserMessage();
            }
        });
    }

    // Handle quick option buttons
    document.querySelectorAll('.quick-option').forEach(function(button) {
        button.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            console.log('Quick option clicked:', question);
            
            // Add user message
            addMessage(question, true);
            
            // Get bot response
            setTimeout(function() {
                const response = getBotResponse(question);
                addMessage(response, false);
            }, 500);
        });
    });


});
