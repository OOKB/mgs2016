# mgs2016
MICA Grad Show 2016 Site Repo

This mockup branch contains some static HTML, CSS, and JS files to demo the different features we need (and to start writing the CSS)

## Install
```bash
git clone git@github.com:OOKB/mgs2016.git
cd mgs2016
npm install
npm start
open http://localhost:3000
```
once running, press the “h” key to hide the right developer sidebar thing

»»»»»»»»»»»»»»»

## Ideas for 2017

- How to make the schedule easier to use?
- How to make the schedule clearer?
- How to make schedule and map searchable?
- de-emphasize students during the shows themselves
- Maybe just list student names and then link to whatever account of theirs that they want? (website, instagram, something)
- Student "pages" only show up @ the end as an "archive" of the shows?
- is there some way to use content from/on http://fyi.mica.edu/ to populate show times and information?
- can we get access to data from MICA TSS re: student information (name, email, etc.)

reference?
- http://gradexhibition.risd.edu/
  * focus on when and where, just list programs and students so you can get a rough idea of what you might expect. This would also give us those things to "search" or "filter" by in the context of not necessarily knowing what people might be coming to the site with/for.


## Usability notes / Discussion points.
2016-06-28

Important questions moving forward:
- Who is the audience?
   - who needs this information the most? how can we make it most direct/easiest for them to access?
      - Parents?
      - Gallerists?
      - Curators?
      - Students?
      - Who else?
        - Are they coming from in town? out of town?

- What is most important?
  - The schedule?
  - The Map?
  - The Students?

- The Graduate students themselves had a very low response rate in terms of uploading content to the site.
  - is it worth continuing to make that a main focus?
    * I asked a number of different people/users (not grad students, but potential site visitors) — the general response was that the site needn't have student works if you could easily link out to their websites or other profiles like twitter, Facebook, instagram, etc.
    * Chris I believe also found this w/ perspective grad students — they find it most useful for linking out to webpages, not necessarily browsing their statement/works right on the site

Our schedule is very complex, how can it possibly be made easier to understand? easier to navigate? easier to sort/search/find the right stuff?

How to integrate more the schedule with the map and the listing of students showing... It is so segregated currently...?

Does the site need to maintain this long scroll design (only been doing that because new design teams more or less reuse wha the old teams started)

What is working for people? What isn't?

How can we better tell if we are serving users correctly? Are there other tools we can integrate — Eventbrite, etc. — that would allow us to know who is coming, how they found out, etc.?

How to tie the print invites and the website together more so we can see an ROI on sending out the invites?

Does there need to be a design connection between the invites and the online version other than just the "theme" — meaning can the website become its own, designed experience that be able to be removed from the styling... the interface could more or less stay the same (or be actually iterated/improved) while the colors and addendum graphics might change from year to year.

Is the single page solution still the best option?
how to think of this more as an app and interface to the information, not just a "webpage" with these distinct sections?

»»»»»»»»»»»»»»»»»

What I think would make the most sense moving forward would be considering the goal of the site... Who are the most important audiences? How can we frame their potential needs and goals in such ways that we can design correctly for those situations.

For example, if we put ourselves into the “user role” of a local art lover who visits the Grad Shows to find new works for their home collection. This person probably has some familiarity with MICA, however they might not be familiar with all the different graduate programs. As someone that buys art, they'd probably be interested in programs like Rinehart, Mount Royal, Hoffberger, and perhaps the Post Bacc Fine Art. It's likely they'd be less interested in designer's works, as well as works that would be hard to own/collect for a home collector. How might they approach the micagradshow.com site? would they need to look based by program? is there a quick way to steer them just to the schedule for the correct show or two? would they want to be able to pre-browse the student's work so as to know whose installs to look for? or is this not important? If they have been to MICA several times, where the galleries are is less important, it is probably more about finding where specific students or programs are showing, not their address specifically...

For best results we'd develop several more "characters" or "user personas" and try to come up with detailed stories for their needs, desires, and knowledge of MICA, the grad shows, the grad programs, Baltimore, etc. so as to help us understand different ways that people might browse, sort, search, scroll, etc. through our site.

Are there different needs a person coming to the MAT show has that a Curator, Gallerist or Collector coming to a different show might have? This is the stuff we need to find out if we want to spend more time/effort/$ on this thing.

We should also ask people in our target demographics who have visited the site what they found easy and what they found hard. We could also ask more people who haven't used the site to try to do some of the things we think our "characters" need to do and see what the pain points might be.

»»»»»»»»»»»»»»»»»

- How can this be a case study for solving these problems for other parts of campus? can we reuse the thinking or tools elsewhere on campus?
- Is this useful in the context of MICA's new website project?

»»»»»»»»»»»»»»»»»

Based on the conversations I've had with the people who I asked to test the site, discussions with some of the former and current grad students, searching out other schools/programs graduate show pages, and general pondering on my own, I have a handful of recommendations:

* Reduce focus on students
  - We should include listings of all the students that will be showing in each section, but the focus on providing a full “profile” for each of them might not be as important. There were many students that failed to complete their profiles, or uploaded no images.  If the grad students themselves aren't finding it useful, or that it is more inconvenience than it is worth, then do we need to provide it? I would suggest merely a listing of all the students with their name, program, personal website and perhaps social links (instagram, twitter, or the like)... You would still be able to find what type of work people made by their other links, and then we would need to collect far less from each student overall... This could also potentially remove a "section" of the site making other jobs around making the schedule and map easier to use more manageable.

* Find more and better ways to sort and search for shows, openings, etc.
  - currently search is basically just for students. the search should really be about finding when things are — so if you searched for a student, the show and location of that student should show up    ** this would mean we would need a location individually for each student... if a program isn't all in one location we haven't currently been doing this...

»»»»»»»»»»»»»»»»»

### Montana & Annie:

Most of these are not serious flaws, as I navigated it was not difficult to find the locations, figure out which event was when and where, what program was showing at which location, etc. Overall fairly useable for the unexperienced. Annie was able to find when and where things were happening, although she sometimes took more roundabout ways then I did.

General comments from Annie’s perspective:
- Regarding the list of events/exhibitions: "Black text doesn't make me think it is a link at all, maybe if it was a different color?"
- Regarding links to map within event listings: "I had no idea they were there"
- Regarding photos of students: "I like the colored rollovers, I can tell that I am supposed to click on them"
- Regarding Student Art Slideshows: "They move too fast" (probably not something you can change) "I like that you can click the dots to go to a specific picture"
- Regarding list next to map scrolling sepatrately: "Super annoying" Why? "it's just frustrating", no further elaboration, probably just that scrolling was inturrupted. (not sure if that's helpful but it was the issue she was most passionate about)

Montana's general notes:
- Exhibitions/single day event/etc
  * [No address or location for most of the events, assuming it means they are in the Grad building unless specified otherwise?]- wrote this before I realized the events were links that could be clicked on. I think that right off the bat it just looks like a list without links, but with any interaction at all it becomes clear with the rollovers. I didn't figure it out instantly, but I think it was fast enough.
  * The list of events that have already happened is a little bit confusing, I spent a while skimming them before I realized they had already happened and the event that was currently happening was highlighted. Maybe make the text of the events that have happened already a lighter grey color but still leave them clickable?
  * I like the clickable locations that scroll down to the map

- Map/Galleries
  * Contrast between the light grey and white on map is really low, it was fairly hard to see streets and blocks unless my laptop screen was at just the right angle.
  * Gallery hours have been left blank under curatorial practice programs (you probably know this or it's not important, but I'm writing down everything, you can disregard what you know about already)
  * The menu on the right side of the map has some weird location links happening. Clicking on "Curatorial Practice programs" brings me all the way to the top or the middle of the list above the map making me have to scroll back to the map, while clicking the "exhibitions" and "single day events" links make the page scroll to where most of the map hangs off the top of the page and part of the "programs" page peeks up from the bottom so I have to scroll back up to the map.
  * I would say the map/ gallery locator works well, I think that it has been paired well with the list of events.
  * One concern I have  is that even with a map pin and a name and address, some of the gallery spaces are subtle/I as a generic user may not know what I am looking for. Obviously it is a little late for this, but some kind of "profile" page for each venue that shows a photo of the location and some general info might be nice. (sidenote, I think Terrault may have moved to a new address)

- Students
  * The student profiles with the slideshows look good. One thing that took me a sec was that they are actually pop ups, not new indows. It took me a few times hitting back only to be dumped back at the top of the page and having to navigate back to the students to notice the X button in the upper right, when I clicked it I was still at the students page which was a relief! Again not difficult to figure out, but was not instant. (sidenote, annie figured this out right away, she had no problems seeing the close button immediately)
  * Maybe some may to link the students to the galleries they will be showing at?
  * The "Programs" menu is a bit frustrating. It suffers from not looking like a menu like the exhibitions list, but the weight and color are even less link like. I spent a while looking and wondering why the section was called programs when it just had photos of the students and their work. It took me a long time to realize it was a drop down menu.
  * Biggest flaw so far: When I use the "programs" menu, once I select a specific program it is impossible (as far as I could tell) to get back to the main students page with everyone all together without completely re-loading the page. I was enjoying clicking through the students and looking at their work, but once I sorted by a program I had to go throught the while menu one by one if I wanted to look at everyone again. Having an "All programs" option in the menu would be great!
  * Small thing, when I click on the programs menu, the only way to close the menu is to click on the word "Programs" again, instead of on many websites where the user can simply click elsewhere to close the menu. The menu is just big enough that It is a little in the way when it stays open.

- Other:
Since it is a somewhat long scroll site, maybe a back to top button as you move farther down, or make the "16" image in the upper left bring you back?

»»»»»»»»»»»»»»»»»

### Anna:

The updates page take  you to a tumblr but the text color is difficult to read because it's so light.

It would also be nice  if there was a link back to the main webpage from the updates tumblr. It's not  clear you're leaving the site when you click on updates.

Also are things like  "not really here" just fillers in the CURATORIAL PRACTICE  PROGRAMS schedule?

I really like the search feature. If you were looking for a person specifically, that works really well.

Exhibitions/single day events/curatorial practice programs - it's unclear that you can select the dates for more info unless you hover directly over them.  I like how once selected the pink bar appears across the whole page but I think it would be more clear if the bar appeared when you were hovering anywhere within that area instead of ONLY on the text.  It took me a few min to realize there was more info available on the dates.   Let me know if you need more clarification on this one as I clearly cannot articulate it succinctly.

Exhibitions/single day events/curatorial practice programs - once the dates have been clicked it shows all the exhibitions but when several are listed it's hard to see the separation.  Specifically with April 15-May 1 it would be helpful to have a line separating each exhibition or maybe bolded or more identifiable font for the  school instead of having "galleries" in bold.  

Exhibitions/single day events/curatorial practice programs - When you've selected the dates and you're looking at the exhibitions in list form, at the very bottom it lists the reception date and time.  Does that mean all of those exhibitions have the same reception date and time and if so, where is the reception? I'm guessing all of them are the same time frame but different locations (thus the map being the next section) but I could see some people being confused by the singularity of "reception" and then not making the connection that it's at the specified gallery.  That might be with

The map looks good, easy to navigate and it's clear you can select the venue.  I also like that the gallery hours are listed.

Connecting students to their corresponding showcase is difficult.  Some students have the school listed and some have their medium listed.  I am unfamiliar so maybe those are the main identifiers for finding the correct exhibition but to me it's unclear.   If there is some way to make it a little more obvious that the easiest way to find that info is to search the name that would be ideal.  Maybe even instead of the text "search by name" it could say "search by student or venue" or something.

Overall I think most of the confusion is in the date/exhibition selection and student search.  
