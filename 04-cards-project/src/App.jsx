import Card from "./components/Card";

const App = () => {
  const jobs = [
    {
      brandLogo:
        "https://images.icon-icons.com/2429/PNG/512/google_logo_icon_147282.png",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      stipend: 35,
      location: "Bengaluru, India",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
      companyName: "Microsoft",
      datePosted: "1 week ago",
      post: "Software Engineer Intern",
      tag1: "Part Time",
      tag2: "Junior Level",
      stipend: 30,
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      stipend: 32,
      location: "Bengaluru, India",
    },
    {
      brandLogo:
        "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      stipend: 40,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://applescoop.org/image/icon/apple-logo-icon-square.jpg",
      companyName: "Apple",
      datePosted: "5 days ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      stipend: 38,
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/020/335/987/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      stipend: 55,
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://w7.pngwing.com/pngs/801/1/png-transparent-acrobat-adobe-square-adobe-square-icon.png",
      companyName: "Adobe",
      datePosted: "3 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      stipend: 34,
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/021/515/084/original/ibm-logo-brand-software-computer-symbol-black-design-illustration-free-vector.jpg",
      companyName: "IBM",
      datePosted: "1 month ago",
      post: "Frontend Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      stipend: 28,
      location: "Bengaluru, India",
    },
    {
      brandLogo:
        "https://tse3.mm.bing.net/th/id/OIP._vEnglaa2E3b45GjoZunnAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      companyName: "NVIDIA",
      datePosted: "6 days ago",
      post: "Software Engineer Intern",
      tag1: "Part Time",
      tag2: "Junior Level",
      stipend: 36,
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://toppng.com/uploads/preview/salesforce-transparent-logo-115525063493207zrqpiz.png",
      companyName: "Salesforce",
      datePosted: "2 weeks ago",
      post: "Web Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      stipend: 33,
      location: "Hyderabad, India",
    },
  ];

  return (
    <div className="parent">
      {jobs.map((job, index) => {
        return (
          <div key={index}>
            <Card
              brandLogo={job.brandLogo}
              companyName={job.companyName}
              datePosted={job.datePosted}
              post={job.post}
              tag1={job.tag1}
              tag2={job.tag2}
              stipend={job.stipend}
              location={job.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
