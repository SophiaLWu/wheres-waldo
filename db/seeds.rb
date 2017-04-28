# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puzzles = Puzzle.create([{ name: "The Gold Rush", 
                           image_url: "gold-rush.jpg" }])

characters = Character.create([{ name: "Waldo",
                                 x_position: 250,
                                 y_position: 385,
                                 puzzle_id: 1,
                                 image_url: "waldo.jpg" },
                               { name: "Wizard Whitebeard",
                                 x_position: 1307,
                                 y_position: 226,
                                 puzzle_id: 1,
                                 image_url: "whitebeard.jpg" },
                               { name: "Odlaw",
                                 x_position: 524,
                                 y_position: 99,
                                 puzzle_id: 1,
                                 image_url: "odlaw.jpg" },
                               { name: "Wenda",
                                 x_position: 811,
                                 y_position: 720,
                                 puzzle_id: 1,
                                 image_url: "wenda.jpg" },
                               { name: "Woof",
                                 x_position: 1014,
                                 y_position: 184,
                                 puzzle_id: 1,
                                 image_url: "woof.jpg" }])