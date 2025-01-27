<script>
  import Header from "$lib/components/header.svelte";

  const title = "Resume";
 
</script>

<div class="flex justify-between">
  <Header {title}></Header>
  <button class="btn btn-neutral">Download CV</button>
</div>

<div class="mt-8">

  <h2 class="text-3xl font-semibold">
    Education
  </h2>
  <div class="divider"></div>

  <h2 class="text-3xl font-semibold">
    Work History
  </h2>
  <div class="divider"></div>

  <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
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
        <ul>
          <li>Leadership: Supervised peers with less experience</li>
        </ul>
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
        iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
        been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
        and has evolved through seven distinct forms
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
        The iPod is a discontinued series of portable media players and multi-purpose mobile devices
        designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
        8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
        million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
        over 20 years, the iPod brand is the oldest to be discontinued by Apple
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
