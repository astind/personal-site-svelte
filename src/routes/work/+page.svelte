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

  <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical px-4">
    <li>
      <div class="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 text-primary">
          <g clip-path="url(#a)">
            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.25-7.25a.75.75 0 0 0 0-1.5H8.66l2.1-1.95a.75.75 0 1 0-1.02-1.1l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.75.75 0 0 0 1.02-1.1l-2.1-1.95h4.59Z" clip-rule="evenodd" />
          </g>
          <defs>
            <clipPath id="a">
              <path d="M0 0h20v20H0z" />
            </clipPath>
          </defs>
        </svg>        
      </div>
      <div class="timeline-start mb-10 md:text-end">
        <time class="font-mono italic">June 2012</time>
        <div class="text-lg font-black">JD Connell Construction</div>
        My first job in high school. It payed better than a lot of starter jobs, but it was a lot harder work.
        I worked the summers and saved enough to cover my college semesters.

        I learned a lot of professional skills, but also learned that I didn't want to work construction for a living.
        <div class="flex flex-col items-center justify-center pl-4 lg:pl-8 pr-4 mt-2">
          <h4 class="font-bold">Skills Learned:</h4>
          <ul class="list-disc text-left">
            <li>Leadership: Supervised peers with less experience</li> 
          </ul>
        </div>
      </div>
      <hr class="bg-primary" />
    </li>
    <li>
      <hr class="bg-primary" />
      <div class="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 text-primary">
          <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z" clip-rule="evenodd" />
        </svg>        
      </div>
      <div class="timeline-end md:mb-10">
        <time class="font-mono italic">May 2017</time>
        <div class="text-lg font-black">Altamira Technologies</div>
        I interned at Altamira the summer before my Senior year of college. They offered me a full time position after graduation. 
        I recieved a Top-Secret Security Clearance (TS/SCI) and worked on 
        projects for the USAF at NASIC. It was here that I began developing experience as a Full-Stack Software Engineer.
        <div class="flex flex-col items-center justify-center px-4 mt-2">
          <h4 class="font-bold">Skills Learned:</h4>
          <ul class="list-disc">
            <li>Lead development on a Radar/Satellite Analysis Tool for NASIC using a MEAN stack</li>
            <li>Angular front-end application development</li>
            <li>Node.js/Express server-side API development</li>
            <li>Micro-service architecture using Docker & Kubernetes</li>
          </ul>
        </div>
      </div>
      <hr class="bg-primary" />
    </li>
    <li>
      <hr class="bg-primary" />
      <div class="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 text-primary">
          <g clip-path="url(#a)">
            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.25-7.25a.75.75 0 0 0 0-1.5H8.66l2.1-1.95a.75.75 0 1 0-1.02-1.1l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.75.75 0 0 0 1.02-1.1l-2.1-1.95h4.59Z" clip-rule="evenodd" />
          </g>
          <defs>
            <clipPath id="a">
              <path d="M0 0h20v20H0z" />
            </clipPath>
          </defs>
        </svg> 
      </div>
      <div class="timeline-start mb-10 md:text-end">
        <time class="font-mono italic">April 2022</time>
        <div class="text-lg font-black">Rural Sourcing/Sparq</div>
        When my wife became pregnant, I began looking for opportunities for remote work. I was hired by Rural Sourcing (now Sparq) to work on a team developing 
        micro front-end applications using Angular. We were able to quickly build UI components for customers by droping in these micro front-end blocks. While I was there,
        I was a software enginerring consultant for a Fortune 500 company, and two start-up companies.
        <div class="flex flex-col items-center justify-center pl-4 lg:pl-8 pr-4 mt-2">
          <h4 class="font-bold">Skills Learned:</h4>
          <ul class="list-disc text-left">
            <li>Building small, scaleable, and resusable UI components</li>
            <li>Learned Jamstack application architecture</li>
            <li>Experience using Azure DevOps</li>
          </ul>
        </div>
      </div>
      <hr class="bg-primary" />
    </li>
    <li>
      <hr class="bg-primary" />
      <div class="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 text-primary">
          <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h4.59l-2.1 1.95a.75.75 0 0 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 1 0-1.02 1.1l2.1 1.95H6.75Z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="timeline-end md:mb-10">
        <time class="font-mono italic">Sept. 2022</time>
        <div class="text-lg font-black">Zachary Piper</div>
        iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
        operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
        January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
        of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
        accounts for 15.6% of global smartphone market share
      </div>
      <hr class="bg-primary" />
    </li>
    <li>
      <hr class="bg-primary" />
      <div class="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 text-primary">
          <g clip-path="url(#a)">
            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.25-7.25a.75.75 0 0 0 0-1.5H8.66l2.1-1.95a.75.75 0 1 0-1.02-1.1l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.75.75 0 0 0 1.02-1.1l-2.1-1.95h4.59Z" clip-rule="evenodd" />
          </g>
          <defs>
            <clipPath id="a">
              <path d="M0 0h20v20H0z" />
            </clipPath>
          </defs>
        </svg> 
      </div>
      <div class="timeline-start mb-10 md:text-end">
        <time class="font-mono italic">April 2023</time>
        <div class="text-lg font-black">GDIT</div>
        The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
        tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
        iOS and other Apple products and services
      </div>
    </li>
  </ul>

  <h2 class="text-3xl font-semibold">
    Skills
  </h2>
  <div class="divider"></div>

</div>
