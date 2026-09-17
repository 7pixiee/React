import Section1 from "./components/section1/section1"
import Section2 from "./components/section2/section2"

const App = () => {

const users = [
  {
    img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    tag: 'Satisfied'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    tag: 'Underserved'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661645312997-53c1204fae36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    tag: 'Underbanked'
  },
   {
    img: 'https://plus.unsplash.com/premium_photo-1661576445274-3fd93c31512d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    tag: 'Satisfied'
  }
]

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App