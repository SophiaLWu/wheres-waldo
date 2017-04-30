class StaticPagesController < ApplicationController
  def home
    @puzzles = Puzzle.all
  end
end
