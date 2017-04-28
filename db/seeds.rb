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
                                 x_position: 195,
                                 y_position: 304,
                                 puzzle_id: 1,
                                 image_url: "waldo.jpg" },
                               { name: "Wizard Whitebeard",
                                 x_position: 1026,
                                 y_position: 178,
                                 puzzle_id: 1,
                                 image_url: "whitebeard.jpg" },
                               { name: "Odlaw",
                                 x_position: 413,
                                 y_position: 79,
                                 puzzle_id: 1,
                                 image_url: "odlaw.jpg" },
                               { name: "Wenda",
                                 x_position: 639,
                                 y_position: 567,
                                 puzzle_id: 1,
                                 image_url: "wenda.jpg" },
                               { name: "Woof",
                                 x_position: 796,
                                 y_position: 145,
                                 puzzle_id: 1,
                                 image_url: "woof.jpg" }])