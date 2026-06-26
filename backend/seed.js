const mongoose = require('mongoose')
const Scholarship = require('./models/Scholarship')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, { family: 4 })
  .then(() => console.log('Connected!'))
  .catch(err => console.log(err))

const scholarships = [
  {
    name: "National Scholarship Portal (NSP) - Post Matric",
    provider: "Government of India",
    amount: "Up to ₹15,000/year",
    deadline: "2025-10-31",
    eligibility: {
      grades: ["Class 11", "Class 12", "Undergraduate", "Postgraduate"],
      streams: ["Science", "Commerce", "Arts", "Engineering", "Medical", "Law", "Management", "Other"],
      states: ["All"],
      income: "Below 2.5 Lakhs",
      categories: ["SC", "ST", "OBC", "EWS"],
      gender: "All"
    },
    description: "Central government scholarship for post-matric students from minority and SC/ST/OBC communities.",
    applyLink: "https://scholarships.gov.in",
    documents: ["Aadhaar Card", "Income Certificate", "Caste Certificate", "Previous Marksheet", "Bank Account Details", "Bonafide Certificate"]
  },
  {
    name: "INSPIRE Scholarship",
    provider: "Department of Science & Technology",
    amount: "₹80,000/year",
    deadline: "2025-11-30",
    eligibility: {
      grades: ["Undergraduate"],
      streams: ["Science"],
      states: ["All"],
      income: "Any",
      categories: ["General", "OBC", "SC", "ST", "EWS"],
      gender: "All"
    },
    description: "Scholarship for students pursuing Natural and Basic Sciences at undergraduate level.",
    applyLink: "https://online-inspire.gov.in",
    documents: ["Aadhaar Card", "12th Marksheet", "Admission Letter", "Bank Account Details", "Passport Photo"]
  },
  {
    name: "Central Sector Scheme (CSS) Scholarship",
    provider: "Ministry of Education",
    amount: "₹12,000/year (UG) | ₹20,000/year (PG)",
    deadline: "2025-10-31",
    eligibility: {
      grades: ["Undergraduate", "Postgraduate"],
      streams: ["Science", "Commerce", "Arts", "Engineering", "Medical", "Law", "Management"],
      states: ["All"],
      income: "Below 8 Lakhs",
      categories: ["General", "OBC", "SC", "ST", "EWS"],
      gender: "All"
    },
    description: "Merit-based scholarship for students who secured above 80% in Class 12 boards.",
    applyLink: "https://scholarships.gov.in",
    documents: ["Aadhaar Card", "12th Marksheet", "Income Certificate", "Bank Account Details", "Bonafide Certificate"]
  },
  {
    name: "Begum Hazrat Mahal National Scholarship",
    provider: "Maulana Azad Education Foundation",
    amount: "₹5,000 - ₹6,000/year",
    deadline: "2025-09-30",
    eligibility: {
      grades: ["Class 9", "Class 10", "Class 11", "Class 12"],
      streams: ["Science", "Commerce", "Arts"],
      states: ["All"],
      income: "Below 2 Lakhs",
      categories: ["General", "OBC", "SC", "ST"],
      gender: "Female"
    },
    description: "Scholarship exclusively for girl students from minority communities studying in Class 9-12.",
    applyLink: "https://maef.nic.in",
    documents: ["Aadhaar Card", "Income Certificate", "Minority Community Certificate", "Previous Marksheet", "Bank Account Details"]
  },
  {
    name: "Pragati Scholarship for Girls (AICTE)",
    provider: "AICTE",
    amount: "₹50,000/year",
    deadline: "2025-11-15",
    eligibility: {
      grades: ["Undergraduate", "Diploma"],
      streams: ["Engineering"],
      states: ["All"],
      income: "Below 8 Lakhs",
      categories: ["General", "OBC", "SC", "ST", "EWS"],
      gender: "Female"
    },
    description: "AICTE scholarship for girl students pursuing technical education.",
    applyLink: "https://scholarships.gov.in",
    documents: ["Aadhaar Card", "Income Certificate", "Admission Letter", "12th Marksheet", "Bank Account Details"]
  },
  {
    name: "Saksham Scholarship (AICTE)",
    provider: "AICTE",
    amount: "₹50,000/year",
    deadline: "2025-11-15",
    eligibility: {
      grades: ["Undergraduate", "Diploma"],
      streams: ["Engineering"],
      states: ["All"],
      income: "Below 8 Lakhs",
      categories: ["General", "OBC", "SC", "ST", "EWS"],
      gender: "All"
    },
    description: "Scholarship for differently-abled students pursuing technical education.",
    applyLink: "https://scholarships.gov.in",
    documents: ["Aadhaar Card", "Disability Certificate", "Income Certificate", "Admission Letter", "Bank Account Details"]
  },
  {
    name: "Post Matric Scholarship for SC Students",
    provider: "Ministry of Social Justice",
    amount: "Up to ₹23,000/year",
    deadline: "2025-10-31",
    eligibility: {
      grades: ["Class 11", "Class 12", "Undergraduate", "Postgraduate", "Diploma", "ITI"],
      streams: ["Science", "Commerce", "Arts", "Engineering", "Medical", "Law", "Management", "Other"],
      states: ["All"],
      income: "Below 2.5 Lakhs",
      categories: ["SC"],
      gender: "All"
    },
    description: "Government scholarship exclusively for SC students pursuing post-matric education.",
    applyLink: "https://scholarships.gov.in",
    documents: ["Aadhaar Card", "Caste Certificate", "Income Certificate", "Previous Marksheet", "Bank Account Details"]
  },
  {
    name: "Maharashtra State Scholarship",
    provider: "Government of Maharashtra",
    amount: "₹5,000 - ₹20,000/year",
    deadline: "2025-12-31",
    eligibility: {
      grades: ["Class 9", "Class 10", "Class 11", "Class 12", "Undergraduate"],
      streams: ["Science", "Commerce", "Arts", "Engineering"],
      states: ["Maharashtra"],
      income: "Below 8 Lakhs",
      categories: ["General", "OBC", "SC", "ST", "EWS"],
      gender: "All"
    },
    description: "State government scholarship for Maharashtra students at various academic levels.",
    applyLink: "https://mahaeschol.maharashtra.gov.in",
    documents: ["Aadhaar Card", "Domicile Certificate", "Income Certificate", "Previous Marksheet", "Bank Account Details"]
  },
  {
    name: "UP Scholarship (Pre & Post Matric)",
    provider: "Government of Uttar Pradesh",
    amount: "Up to ₹12,000/year",
    deadline: "2025-11-30",
    eligibility: {
      grades: ["Class 9", "Class 10", "Class 11", "Class 12", "Undergraduate", "Postgraduate"],
      streams: ["Science", "Commerce", "Arts", "Engineering", "Medical", "Other"],
      states: ["Uttar Pradesh"],
      income: "Below 2 Lakhs",
      categories: ["General", "OBC", "SC", "ST", "EWS"],
      gender: "All"
    },
    description: "Uttar Pradesh state scholarship for students from economically weaker sections.",
    applyLink: "https://scholarship.up.gov.in",
    documents: ["Aadhaar Card", "Domicile Certificate", "Income Certificate", "Previous Marksheet", "Bank Account Details", "Caste Certificate"]
  },
  {
    name: "Vidyasaarathi Scholarship",
    provider: "NSDL e-Governance",
    amount: "₹10,000 - ₹50,000/year",
    deadline: "2025-12-15",
    eligibility: {
      grades: ["Undergraduate", "Postgraduate", "Diploma"],
      streams: ["Engineering", "Medical", "Management", "Science"],
      states: ["All"],
      income: "Below 6 Lakhs",
      categories: ["General", "OBC", "SC", "ST", "EWS"],
      gender: "All"
    },
    description: "Private scholarship platform offering multiple scholarships from corporate CSR funds.",
    applyLink: "https://www.vidyasaarathi.co.in",
    documents: ["Aadhaar Card", "Income Certificate", "Admission Letter", "Previous Marksheet", "Bank Account Details"]
  }
]

const seedDB = async () => {
  await Scholarship.deleteMany({})
  await Scholarship.insertMany(scholarships)
  console.log('✅ 10 Scholarships added to database!')
  mongoose.connection.close()
}

seedDB()