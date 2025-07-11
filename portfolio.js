document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle menu function
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent scrolling when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }
    
    // Toggle menu on button click
    menuToggle.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on links//
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 995) {
                toggleMenu();
            }
        });
    });
    
    // Close menu when clicking outside//
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 995 && 
            navMenu.classList.contains('active') &&
            !event.target.closest('.nav-menu') && 
            !event.target.closest('.menu-toggle')) {
            toggleMenu();
        }
    });
    
    // Close menu if window is resized to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 995 && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});





// Carlous Images //

 document.addEventListener('DOMContentLoaded', function() {
  const carouselImages = document.querySelectorAll('.carousel-img');
  let currentIndex = 0;
  const intervalTime = 3000;

  function nextImage() {
    carouselImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % carouselImages.length;
    setTimeout(() => {
      carouselImages[currentIndex].classList.add('active');
    }, 50);
  }

  carouselImages[0].classList.add('active');
  let carouselInterval = setInterval(nextImage, intervalTime);

  const carousel = document.querySelector('.carousel');
  carousel.addEventListener('mouseenter', () => {
    clearInterval(carouselInterval);
  });
  
  carousel.addEventListener('mouseleave', () => {
    carouselInterval = setInterval(nextImage, intervalTime);
  });
});





// Experience //


document.addEventListener('DOMContentLoaded', function() {
  // Create modal element
  const modal = document.createElement('div');
  modal.className = 'exp-modal';
  modal.innerHTML = `
    <div class="exp-modal-content">
      <span class="close-modal">&times;</span>
      <div class="modal-body"></div>
    </div>
  `;
  document.body.appendChild(modal);

  // Full story contents for each box
  const fullStories = {
    school: `
  <h3>School Experience (Full Story)</h3>
<p>My educational journey began in 2007 A.D. (2064 B.S.), when I first joined nursery at an unnamed school in Bishanpur, Kapilvastu. 
However, that same year, my life was forever changed by a horrifying tragedy. During a religious conflict, a group of Muslim individuals attacked our village,
burned down our house, and in that brutal incident, my father was burned alive. This traumatic event forced me to stop my education that year.</p>

<p>In 2008 A.D. (2065 B.S.), I resumed my studies by enrolling in Our Motherland Academy English Boarding School, located in Chandrauta, 
Kapilvastu. There, I completed nursery, LKG, UKG, and Grade 1. I was among the top 10 students in my class and had only a few close friends. 
Despite the early disruption in my education, I adapted well and performed strongly.</p>

<p>In Grade 2, due to financial difficulties, I transferred to a public English medium school, Shree Rastriya Secondary School, 
also in Chandrauta. I continued my education there from Grade 2 to Grade 5. At this school, I consistently topped my class. 
It wasn’t due to a lack of competition—one of my classmates, who also came from Our Motherland Academy, often competed with me academically. 
By Grade 5, I became the second-highest-ranked student in the entire school. I was well known among both teachers and students, although 
I wasn’t particularly close to anyone. Interestingly, in the four years I spent there, I was punished only once—for unintentionally skipping a class. 
I had thought the teacher was absent and waited outside, but she arrived later and found me missing.</p>

<p>Since Shree Rastriya Secondary School didn’t offer English medium classes beyond Grade 5, I enrolled at 
Shree Nepal Adarsh Secondary School in Grade 6, located in Shivapur, Chandrauta, Kapilvastu. This school had recently started 
offering English medium education up to the high school level. At first, I felt like I didn’t belong. 
Most of the students came from private schools, and I, with my public school background, lacked confidence. 
But to my surprise, I secured 4th position in both the first and second terminal exams of Grade 6. 
By the final exam, I ranked 2nd in the class.</p>

<p>In Grade 6, I got to use a computer for the first time, which sparked my curiosity in computers and technology. 
The school gained a strong reputation for its results and low fees. Many top students from nearby private schools joined, 
and the level of competition increased significantly. Again, I feared I would fall behind, but I kept improving. Even though 
I didn’t make it to the top 3, I consistently ranked in the top 10, and my percentage kept rising, which made me proud of my progress.
By Grade 8, my curiosity had grown so much that I hacked a friend’s Facebook account, just to test my understanding of how systems work. 
This experience was one of the earliest signs of my growing interest in cybersecurity and ethical hacking.</p>

<p>Grades 7 to 10 were undoubtedly the best phase of my school life. I formed close friendships with classmates like 
Sudip Panthi, Gaurav Bhusal, Sushan Gyawali, Manish Sapkota, Ankit (Hom) Pun Magar, Krishna Regmi, Aashika Giri, Aakriti Aryal, Suhana Desuwa, Sapana Banjade, 
Susma Belbase, Karuna Dhungana, Sanjana Chaudhary, and Ritu Giri. We shared countless memories—school tours, sports, laughter, and support.
One of my proudest moments was when I became the first student at the school known to solve a Rubik’s Cube. 
I was in Grade 7 when I first solved it, and I began teaching anyone interested—even students in Grades 8, 9, and 10. 
It spread like wildfire: I taught one student, and they passed it on to another. Eventually, over 60% of the English medium students learned to solve the cube. 
It became a friendly competition to see who could solve it the fastest. One student, Yogesh KC, whom I taught the basics, 
took it further by mastering advanced techniques. He eventually became the fastest solver, and I proudly remained second. 
I was also known as the fastest runner in my class from Grade 6 to 10.</p>

<p>In Grade 8, I scored a 3.73 GPA in the Basic Level Examination (BLE), a major milestone in Nepal’s school system. Then came Grade 9, 
but it was disrupted by the COVID-19 pandemic. The school reopened briefly after the first wave but closed again due to the second wave. 
After finishing Grade 9, I entered Grade 10 under unique circumstances.</p>

<p>Grade 10 began online, and after we received COVID vaccinations, we sat for our first physical terminal exam. 
I scored 3.94 GPA, the same as the top student, but she ranked slightly higher due to percentage conversion. After that, 
physical classes resumed, and I completed my Secondary Education Examination (SEE) with a final GPA of 3.45.
Grades 7 to 10 truly shaped who I am today. I participated in a debate competition once—my first and last—as I realized public speaking wasn't my strength. 
Still, I grew in confidence and character. I had great respect for my teachers, especially Om Bikram Chaudhary (English), Prem Bahadur Tharu (Math), 
and others like Maheshwor Khanal, Surendra Chaudhary, Bhima Giri, Mohan Pokhrel, and Rakesh Chaudhary. Surendra Sir always encouraged me to speak louder and more confidently, 
knowing that I was shy and not comfortable on stage.</p>

<p>My school journey was filled with challenges, transformations, learning, friendships, and joyful moments 
that will always remain close to my heart.</p>

    `,
    highschool: `
      <h3>High School Experience (Full Story)</h3>
      <p>I have been in love with computers and technology since my school days, so I wanted to pursue my education in the tech field. 
      Initially, I thought about joining a three-year Diploma in Computer Engineering program, but after hearing from seniors and doing my own research, 
      I found that in Nepal it often takes 4 to 5 years to complete due to delays in exams and results. 
      So, I decided to study Computer Science in high school along with Mathematics and joined the same school where 
      I completed Grade 10.</p>

<p>Even though I studied there for five years, I felt alone during Grade 11 because my old friends weren’t there, 
and I wasn’t enjoying it much. However, as time passed, I slowly started making friends — 
Mukesh, Anil, Dheeru, Chandrapal, Mahesh, Puja, Urmila, Manju, and Nandani. We were only nine students in the class, 
so we often discussed educational topics rather than entertainment.
I enjoyed the practical classes in Physics and Chemistry, but not the theoretical ones. 
In Computer Science, however, I loved both theory and practical sessions. I completed Grade 11 with a 3.36 GPA 
and secured the first rank in my class.</P>

<p>In Grade 12, I started getting to know some juniors who already knew me as the top student in the senior class — 
including Saujanya Bhusal, Jaya Bhandari, Nikita Podudel, Sujata Giri, Gagan Gaire, and Laxman Pun Magar. 
During high school, I was also known as the fastest runner from the science faculty. I shared computer classes 
with management students and Nepali classes with humanities students. I completed Grade 12 with a 3.26 GPA, 
again securing the first rank in my class.</p>

<P>Although I didn’t have a close guy friend I could truly vibe with, I often spent time with the girls. 
Many juniors used to ask for help with their studies, and I never refused — I helped whenever I could. 
I really started to enjoy my high school days toward the end, as I became more friendly with both my classmates and juniors.</p>

<p>In conclusion, while my high school experience initially felt lonely and focused only on studies, 
it became more enjoyable and meaningful toward the end as I built connections and truly started to feel a part of the community.</p>
    `,
    cybersecurity: `
      <h3>Cybersecurity Journey (Full Story)</h3>
      <p>I was introduced to screen-touch mobile phones in grade 3 through my mom’s device. At first, 
      I used it mainly for entertainment, playing games and watching videos. In grade 6, I got to use a computer 
      for the first time, and that moment sparked a deep interest in computers and technology. While exploring more about 
      the digital world, I discovered the web series Mr. Robot, which introduced me to hacking and cybersecurity. 
      The series teaches realistic cybersecurity concepts like phishing, DDoS attacks, and social engineering while highlighting the 
      importance of operational security (OpSec) and human vulnerability. Inspired by this, I became curious and started learning on my own. 
      By grade 8, I had learned to hack a Facebook account using phishing techniques through a mobile phone, and even accessed the camera of another 
      device owned by my mom. These experiences made me realize how vulnerable the digital world is, and I became determined to stay one step ahead of hackers.</p>

<p>Motivated by this interest, I pursued Computer Science in high school, where I studied the basics of C programming, HTML, CSS, PHP, JavaScript, and DBMS. 
I often explored topics beyond the classroom syllabus and enjoyed building websites using HTML and CSS—even though I never hosted them, it helped me strengthen 
my front-end development skills. My curiosity pushed me to understand how technologies work and how security plays a critical role in protecting systems and users. 
I took every opportunity to improve my technical knowledge, which helped me build a strong foundation in both programming and problem-solving.</p>

<p>After completing high school, I started learning Python through YouTube channels like Code With Harry and Apna College. I gained a solid understanding of the 
basics and created small projects, such as a password strength checker and a simple calculator. With a strong passion for cybersecurity and a desire to contribute meaningfully, 
I decided to pursue a Bachelor's degree in Computer Science with a specialization in Cybersecurity. My ultimate goal is to become a cybersecurity analyst and establish 
a cyber bureau in Nepal that works in collaboration with the Nepal government to protect national digital infrastructure and raise awareness about cyber threats.</p>
    `,
    
    interview: `
      <h3>US Interview Experience (Full Story)</h3>
      <p>I had my US visa interview scheduled for 2:00 PM on March 18 at the US Embassy in Kathmandu, but I arrived early with two friends. 
      After leaving my phone and bag with them, I entered the embassy around 12:15 PM. While waiting in line, I met a few other students—some were nervous 
      due to low scores and long academic gaps. I wasn't too anxious, but during biometric, my sweaty hands caused a slight delay, which annoyed the officer. 
      Still, I moved forward with confidence.</p>
      
      <p>My interview was at counter 7. The officer asked me about my major, and I answered confidently: Computer Science 
      with a focus on cybersecurity. I explained how my interest began in grade 10 when my Facebook account was hacked and 
      how cybercrime has been rising rapidly. I mentioned my skills with the Rubik's cube and briefly described my high school studies
      in programming languages like C, Java, PHP, and database. When asked about my sponsor, I answered sincerely, 
      but a slight slip in wording may have caused confusion. The officer looked at my DS-160, pulled out a yellow slip, and 
      said, "Sorry, I cannot approve your visa this time." I calmly asked for the reason, and he replied, "Try next time."</p>
      
      <p>Walking out with that yellow slip was heartbreaking. My friends were waiting outside, hopeful like me, 
      but I had to break the news. Despite all my preparation, it felt like everything collapsed in a moment. 
      That day, approvals seemed rare, and I realized how uncertain the process can be. Still, 
      I believe rejection is not the end—just a redirection. For many, the U.S. is a dream. For some, a responsibility. 
      For me, it's both—and I will try again.</p>
    `
  };

  // Set up click handlers for all buttons
  document.querySelectorAll('.exp-read-more').forEach((button, index) => {
    button.addEventListener('click', function() {
      const storyKey = Object.keys(fullStories)[index];
      modal.style.display = 'flex';
      modal.querySelector('.modal-body').innerHTML = fullStories[storyKey];
    });
  });

  // Close modal handlers
  const closeModal = modal.querySelector('.close-modal');
  if (closeModal) {
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }

  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

