import React, { useRef, useEffect} from 'react'
import styles from './reviews.module.css'
import Title from '../Title/Title'

import { gsap } from 'gsap'
import {ScrollTrigger}  from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "restart pause reverse pause",
  markers: false
});


const Reviews = () => {

	const infoRefs = useRef([]);
	infoRefs.current = [];

	const addToInfoRefs = el => {
	    if (el && !infoRefs.current.includes(el)) {
	      infoRefs.current.push(el);
	    }
	};

	useEffect(() => {
	    // Info
	    infoRefs.current.forEach(el => {
	      gsap.from(el, {
	      	y: -50,
			duration: 1,
			delay: 1,
			paused: true,
			opacity: 0,
			ease: "power2",
			scrub: true,
	        scrollTrigger: {
				trigger: el,
				start: "top center",
				end: "20px 80%",
				toggleActions: "restart play complete reverse",
				markers: false,
	        },
	      });
	    });
	});


	const profileRefs = useRef([]);
	profileRefs.current = [];

	const addToProfileRefs = el => {
	    if (el && !profileRefs.current.includes(el)) {
	      profileRefs.current.push(el);
	    }
	};

	useEffect(() => {
		// Profile
	    profileRefs.current.forEach(el => {
	      gsap.from(el, {
	      	x: -50,
			duration: 1,
			paused: true,
			opacity: 0,
			ease: "power2",
			scrub: true,
	        scrollTrigger: {
				trigger: el,
				start: "top center",
				end: "20px 80%",
				toggleActions: "restart play complete reverse",
				markers: false,
	        },
	      });
	    });
	});


	const reviewRefs = useRef([]);
	reviewRefs.current = [];

	const addToReviewRefs = el => {
	    if (el && !reviewRefs.current.includes(el)) {
	      reviewRefs.current.push(el);
	    }
	};

	useEffect(() => {
		// Review
	    reviewRefs.current.forEach(el => {
	      gsap.from(el, {
	      	x: 150,
			duration: 1,
			paused: true,
			opacity: 0,
			ease: "power2",
			scrub: true,
	        scrollTrigger: {
				trigger: el,
				start: "top center",
				end: "20px 80%",
				toggleActions: "restart play complete reverse",
				markers: false,
	        },
	      });
	    });
	});





	return (
		<div className={styles.reviews}>
			<div className={styles.container}>
				<div className={styles.flexItemDark}>
					<div className={styles.flexItem1}>
						<Title title="Customer Engagement / User Experience" theme="dark" align="left" />
						<div className={styles.line}></div>
						<br />
						<p ref={addToInfoRefs} className={styles.info}>
							Your product and site may be second to none but little
							will matter if your prospective users/customers are
							unwilling to power through the on-boarding friction.

							Ziplyne guides users through an efficient, virtual
							hand-holding experience to ensure maximized
							engagement and conversion.
						</p>
						<div className={styles.client}>
							<img ref={addToProfileRefs} src="https://www.ziplyne.com/static/media/Jon%20Ching.a31df5fd.jpeg" alt="" className={styles.profile} />
								<div ref={addToReviewRefs} className={styles.content}>
									<h3>Jon Ching</h3>
									<h5>Founder & CEO Musing</h5>
									<p>
										Each time a user visits, we want them to understand the value of our site and have them contribute to asking questions or answering another user’s question as fast as possible. Ziplyne allows us to decrease the time to value without adding any manual interaction with our users.
									</p>
								</div>
						</div>
					</div>
				</div>
				<div className={styles.flexItemLight}>
				<div className={styles.flexItem2}>
					<Title title="Employee Software Adoption / Retention" theme="light" align="right" />
					<div className={styles.line}></div>
					<br />
					<p ref={addToInfoRefs} className={styles.info}>
						How happy are you with your SaaS ROI? Are your employees
						utilizing your subscription software at the levels you expect?

						Past solutions (e.g. video tutorials, PDF guides) have often
						been time-consuming to produce, expensive to maintain
						and/or non-scalable.

						Ziplyne enables users to learn directly within the application
						and within in the moment. The onboarding/adoption process
						can be tailored your individual user base and adjusted
						dynamically and contextually for "real" adoption.

						Better training leads to higher retention and less attrition.
					</p>
					<div className={styles.client}>
							<div ref={addToReviewRefs} className={styles.content}>
								<h3>Bob Hatter</h3>
								<h5>Director, Cincinnati Operations at Velosio</h5>
								<p>
									Ziplyne helps us service our many customers with offices and users spread around the globe. Utilizing Ziplyne in conjunction with new application 
									introduction allows customers to easily document their 
									existing and new policies, rules, workflows, and procedures and embed these context specific text and video elements directly into relevant locations of the user screens. As a result, Ziplyne enabled our customers to significantly reduce the 
									high costs and inefficiencies associated with traditional training and support modes.
								</p>
							</div>
							<img ref={addToProfileRefs}  src="https://www.ziplyne.com/static/media/Bob%20Hatter.a5de9ee3.jpeg" alt="" className={styles.profile} />
					</div>
				</div>
				</div>
				<div className={styles.flexItemDark}>
					<div className={styles.flexItem1}>
						<Title title="Sales Enablement / Demos" theme="dark" align="left" />
						<div className={styles.line}></div>
						<br />
						<p ref={addToInfoRefs} className={styles.info}>
							Imagine if you could give every member of your sales team
							a personal on-site coach 24/7. Sales reps often have their
							hands full staying current with both 3rd party tools and
							applications as well as your own Saas product upgrades &
							offerings.

							Ziplyne enables the utilization of scripts, demos and
							training tools within a seamless and dynamic environment
							so that your sales team can ramp up quicker than ever and
							consistently grow and refine.

							Ziplyne can shorten training times, speed up sales cycles,
							decrease need for shadowing and, perhaps
							most importantly, boost your win-rate!
						</p>
						<div className={styles.client}>
							<img ref={addToProfileRefs}  src="https://www.ziplyne.com/static/media/Jonathan.e8ea5584.jpeg" alt="" className={styles.profile} />
								<div ref={addToReviewRefs} className={styles.content}>
									<h3>Jonathan Brickman</h3>
									<h5>Veteran SaaS Sales Executive</h5>
									<p>
										Ziplyne addresses the ramp to productivity challenge head on with an in-line solution that provides content and messaging organically. The faster you can onboard a new salesperson, the faster you get to productivity and revenues.
									</p>
								</div>
						</div>
					</div>
				</div>
				<div className={styles.flexItemLight}>
				<div className={styles.flexItem2}>
					<Title title="HelpDesk / Customer Service Support Optimization" theme="light" align="right" />
					<div className={styles.line}></div>
					<br />
					<p ref={addToInfoRefs} className={styles.info}>
						Market studies have shown that 60-70% of Tier 1 support
						tickets are repetitive and common. The automation of
						Ziplyne cuts down on excess support resources and
						eliminates much of the need for live chat and co-browsing.

						Ziplyne’s seamless user-experience model means that
						your customers can feel as if you are in the room with
						them at virtually all times.

						Feedback is generated in the form of screenshots
						and annotations, so that communication is consistent
						and robust, while external development time/costs
						are reduced.
					</p>
					<div className={styles.client}>
							<div ref={addToReviewRefs} className={styles.content}>
								<h3>Kunal Kumar</h3>
								<h5>SVP, Production & Marketing 5678 Media Group</h5>
								<p>
									As a company, we were looking for a way to simplify the dance application process for 10,000+ applicants. Ziplyne simplified the entire applicant onboarding process and helped us cut down on the common and repetitive questions that would otherwise come to our phones, emails, chats, etc.
								</p>
							</div>
							<img ref={addToProfileRefs}  src="https://www.ziplyne.com/static/media/Kunal%20Kumar.d1b005c6.jpeg" alt="" className={styles.profile} />
					</div>
				</div>
				</div>
			</div>
		</div>
	)
}

export default Reviews