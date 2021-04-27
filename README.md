### Hi there 👋

Code put on GitHub was written mostly for fun, and breaks down into two categories:
Perl modules based on the Mojolicious Web Framework,
or Role-playing game utilities written in Javascript (usually unfinished).

### Perl Modules (also on [CPAN](https://metacpan.org/author/DOTAN))

These were written as fun exercises, or extracted from more ambitious projects that went nowhere.
Publishing them taught me a lot about writing documentation and tests (CPAN has _amazing_ testing infrastructure, 
run by a handful of volunteers), and about releasing software.

- [Mojo::UserAgent::Role::Queued](https://github.com/dotandimet/Mojo-UserAgent-Role-Queued) (2017 - 2018) - adds a queue to the **Mojo::UserAgent** web client to control the number of concurrent asynchronous requests [CPAN](https://metacpan.org/release/Mojo-UserAgent-Role-Queued). I gave a talk about why and how I wrote it (and the silly mistakes I made along the way), the slides for which are available [online](https://mojo-ua-role-queued.netlify.app/).
- [Mojo::Feed](https://github.com/dotandimet/Mojo-Feed) (2014 - 2020) is an RSS parser, using the nifty **Mojo::DOM** library [CPAN](https://metacpan.org/pod/Mojo%3A%3AFeed)
- [Mojolicious::Plugin::ConfigHashMerge](https://github.com/dotandimet/Mojolicious-Plugin-ConfigHashMerge) (2014 - 2017) - Perlish Configuration for Mojolicious applications, with merging of deeply-nested defaults. [CPAN](https://metacpan.org/release/Mojolicious-Plugin-ConfigHashMerge)
- [Mojolicious::Plugin::Alias](https://github.com/dotandimet/mojolicious-plugin-alias) (2014)- allows mapping URL paths to collections of static files (obsolete) [CPAN](https://metacpan.org/release/Mojolicious-Plugin-Alias)

### Javascript RPG utilities

[Recruit](https://github.com/dotandimet/recruit) and [Masks](https://github.com/dotandimet/masks) are editable character sheets for [Night's Black Agents] and [Masks], respectively. They're both unfinished, little more than finger-exercises in Vue.js. 

[NPC Names](https://github.com/dotandimet/npc_names/) is a simple script to generate random millenial (or Gen Z?) names, by crossing the 1000 most common baby names with the 1000 most common American surnames. [Online here](https://dotandimet.github.io/npc_names/).

[The Academy](https://github.com/dotandimet/The-Academy) started as a Google doc, a list of NPCs in a game about a school for super-powered teens; I was unsatisfied with
the formatting, so I wrote it as a Javascript app, using firebase for the backend. It currently shows and lets you filter the list of characters, as well as add new ones
(using the script mentioned above to suggest possible names). The frontend is written in preact, because it's one of the few new frameworks that lets you write
modern javascript without a build step, and my two goals with this project were to have (a) no backend server and (b) no build step! Webpack can get stuffed, I'm fine with
simply hitting the browser's refresh button to see changes...

<!--
### The Rabbit and the Chocolate Carrot Cake

(2011 - 2014) Developed and released an iOS application (in Hebrew and 
English, for Iphone 4 and the early ipad) around an animated film made 
by my brother, who provided all Graphics and Sound.

**dotandimet/dotandimet** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
