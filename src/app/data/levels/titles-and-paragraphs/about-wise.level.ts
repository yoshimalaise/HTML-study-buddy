import { Level } from '../../../model/level.interface';
import { markdownToLevel } from '../../../utils/level-generator'

const markdown = `
# ABOUT WISE

The Web and Information Systems Engineering (WISE) Lab is a research unit of the Department of Computer Science at the Vrije Universiteit Brussel and is headed by Prof. Dr. Beat Signer. The research activities of WISE concentrate on innovative information systems such as next generation web applications, context-aware applications and cross-media information spaces.

The WISE lab further investigates human-computer interaction aspects for those systems, such as interactive paper and cross-media solutions, data physicalisation, tangible holograms as well as multimodal and multi-touch interaction. We develop new engineering methodologies, tools and software frameworks for the rapid prototyping and efficient realisation of innovative information environments.

There is a strong emphasis on conceptual modelling and design, reasoning on designs, localisation and globalisation, adaptation and personalisation, accessibility and usability in general. Important technologies used in this context are graphical and visual design languages, domain-specific modelling languages as well as design patterns. Important application domains are web applications, augmented and virtual reality, serious games and e-learning.

# LATEST NEWS AND ANNOUNCEMENTS

## New Strategic Research Programme Project

A new Strategic Research Programme Growth Funding project (SRP 92) on Real-Time Cross-Media Data Exploration and Analysis for Next Generation Knowledge Workers has recently been granted.

## Public PhD Defence of Renny Lindberg

The public PhD defence of Renny Lindberg is going to take place on July 8 at 15:00 in auditorium D.0.08.  The defence can also be followed through a live stream using this link. The title of the thesis is: Design Recommendations for Social Engagement Platforms: Towards Enhanced Technology Adoption by Elderly People and Long-Term Engagement.  

## Audrey Sanctorum's Research on eSPACE in VUB Today

Our research on the eSPACE end-user authoring tool for cross-device and Internet of Things applications has been featured in VUB Today. The eSPACE solution is also applied in our research on the Internet of Things and Smart Environments.

## PhD of Jan Maushagen in VUB Today and different newspapers

On August 20 (2021) Jan Maushaugen publicly defended his PhD on Mobile Playful Learning Environments. A news article appeared on VUB Today, in Het Nieuwsblad, Het Belang van Limburg, Bruzz, Het Laatste Niews, and different other newssites.

## Interview with Prof. Beat Signer

Professor Beat Signer has recently been interviewed for the ACM SIGWEB Newsletter. The complete interview is available at https://wise.vub.ac.be/publication/interview-beat-signer.`;

export const aboutWiseLevel: Level = markdownToLevel('About WISE', 'This level only uses headings and paragraphs to sketch a basic picture of what the WISE lab is about', markdown);