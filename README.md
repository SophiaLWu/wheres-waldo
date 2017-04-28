# Where’s Waldo?

This is a ["Where's Waldo?"](https://en.wikipedia.org/wiki/Where%27s_Wally%3F) web app built using a Ruby on Rails back end and a JavaScript front end.

This is a project as described in [The Odin Project](https://www.theodinproject.com/courses/javascript-and-jquery/lessons/where-s-waldo-a-photo-tagging-app?ref=lnav).

## Getting Started

Where's Waldo is built in Ruby 2.3.1 and Rails 5.0.2.

To get started with the app, clone the repo and then install the needed gems:

```
$ bundle install --without production
```

Next, migrate the database:

```
$ rails db:migrate
```

Then, seed the database:
```
$ rails db:seed
```

Finally, run the test suite to verify that everything is working correctly:

```
$ rails test
```

If the test suite passes, you'll be ready to run the app in a local server:

```
$ rails server
```

## TODO

- Add markers when a character is found
- Add photos of each character to target info box
- Add a scoring system (timer)
- Add high scores table
- Add link from homepage to puzzle
- Add more puzzles
- Add styling

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
