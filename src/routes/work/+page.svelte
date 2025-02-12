<script>
  import Header from "$lib/components/header.svelte";

  const title = "Resume";
 
</script>

<div class="flex justify-between">
  <Header {title}></Header>
  <button class="btn btn-neutral">Download</button>
</div>

<div class="divider mt-0"></div>

<div class="mt-8">

  <h2 class="text-3xl font-semibold">
    Education
  </h2>
  <div class="divider"></div>

  <div class="w-full px-4">
    <ul class="space-y-4">
      <li>
        <div class="flex justify-between">
          <div class="flex flex-col">
            <h3 class="text-xl font-semibold">Master of Science (M.S.), Computer Science</h3>
            <p class="text-lg italic mt-2">Arizona State University</p>
          </div>
          <div class="text-lg font-semibold">Aug 2020 - Dec 2023</div>
        </div>
      </li>
      <li >
        <div class="flex justify-between">
          <div class="flex flex-col">
            <h3 class="text-xl font-semibold">Bachelor of Science (B.S.), Computer Science</h3>
            <p class="text-lg italic mt-2">Brigham Young University</p>
          </div>
          <div class="text-lg font-semibold">Aug 2012 - Dec 2018</div>
        </div>
      </li>
    </ul>
  </div>

  <h2 class="text-3xl font-semibold mt-8">
    Work History
  </h2>
  <div class="divider"></div>

  <ol class="relative border-s border-primary">                  
    <li class="ms-4">
      <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 bg-primary"></div>
      <time class="mb-1 font-mono italic leading-none">June 2012</time>
      <h3 class="text-lg font-semibold">JD Connell Construction</h3>
      <p class="text-base font-normal base-content">
        My first job in high school. It payed better than a lot of starter jobs, but it was a lot harder work.
        I worked the summers and saved enough to cover my college semesters.
        I learned a lot of professional skills, but also learned that I didn't want to work construction for a living.
      </p>
      <div class="flex flex-col mt-2">
        <h4 class="font-bold">Skills Learned:</h4>
        <ul class="list-disc ml-4">
          <li>Teamwork: I worked with a large multidisciplinary team</li>
          <li>Leadership: I supervised peers with less experience</li>
          <li>Hard Work: We finished projects in difficult conditions</li>
        </ul>
      </div>
    </li>
    <li class="mt-10 ms-4">
        <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 bg-primary"></div>
        <time class="mb-1 font-mono italic leading-none">May 2017</time>
        <h3 class="text-lg font-semibold">Altamira Technologies</h3>
        <p class="ttext-base font-normal base-content">
          I interned at Altamira the summer before my Senior year of college. They offered me a full time position after graduation. 
        I recieved a Top-Secret Security Clearance (TS/SCI) and worked on 
        projects for the USAF at NASIC. It was here that I began developing experience as a Full-Stack Software Engineer. 
        I lead the UI development of a Radar/Satellite Analysis Tool our team was building using a MEAN stack.
        </p>
        <div class="flex flex-col mt-2">
          <h4 class="font-bold">Skills Learned:</h4>
          <ul class="list-disc ml-4">
            <li>Leading development on the UI portion of a project</li>
            <li>Full-Stack development using a MEAN (Mongo, Express, Angular, Node) stack</li>
            <li>Micro-service architecture using Docker & Kubernetes</li>
          </ul>
        </div>
    </li>
    <li class="mt-10 ms-4">
        <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 bg-primary"></div>
        <time class="mb-1 font-mono italic leading-none">April 2022</time>
        <h3 class="text-lg font-semibold">Rural Sourcing/Sparq</h3>
        <p class="ttext-base font-normal base-content">
          When my wife became pregnant, I began looking for opportunities for remote work. I was hired by Rural Sourcing (now Sparq) to work on a team developing 
        micro front-end applications using Angular. We were able to quickly build UI components for customers by droping in these micro front-end blocks. While I was there,
        I was a software enginerring consultant for a Fortune 500 company, and two start-up companies.
        </p>
        <div class="flex flex-col mt-2">
          <h4 class="font-bold">Skills Learned:</h4>
          <ul class="list-disc ml-4">
            <li>How to build small, scaleable, and resusable UI components</li>
            <li>Jamstack application architecture</li>
            <li>Azure DevOps experience</li>
          </ul>
        </div>
    </li>
    <li class="mt-10 ms-4">
      <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 bg-primary"></div>
      <time class="mb-1 font-mono italic leading-none">Sept. 2022</time>
      <h3 class="text-lg font-semibold">Zachary Piper</h3>
      <p class="ttext-base font-normal base-content">
        A recuiter I had met at Zachary Piper contacted me with an opportunity to lead an application
        modernization project for the EPA. I didn't want to pass the opportunity up, since it was a chance to lead development, and 
        improve my software architecture skills. It was a contract-to-hire position with GDIT. 
      </p>
      <div class="flex flex-col mt-2">
        <h4 class="font-bold">Skills Learned:</h4>
        <ul class="list-disc ml-4">
          <li>Software Architecture design</li>
            <li>Setting up a CI/CD development pipeline</li>
            <li>Cloud deployment using AWS</li>
        </ul>
      </div>
    </li>
    <li class="mt-10 ms-4">
      <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 bg-primary"></div>
      <time class="mb-1 font-mono italic leading-none">April 2023</time>
      <h3 class="text-lg font-semibold">GDIT</h3>
      <p class="ttext-base font-normal base-content">
        After a year with Zachary Piper, I was hired full-time by GDIT to continue work on 
        modernizing the EPA's Compendium of Environmental Testing Laboratories.
      </p>
      <div class="flex flex-col mt-2">
        <h4 class="font-bold">Skills Learned:</h4>
        <ul class="list-disc ml-4">
          <li>Software development leadership</li>
          <li>Database architecture and design</li>
          <li></li>
        </ul>
      </div>
    </li>
  </ol>



  <div class="mt-8">
    <h2 class="text-3xl font-semibold">
      Skills
    </h2>
    <div class="divider"></div>
    <ul>
      <li>7+ Years of MEAN stack development expereince</li>
      <li>Software Containerization with Docker and Kubernetes</li>
      <li></li>
    </ul>

  </div>

  

</div>
