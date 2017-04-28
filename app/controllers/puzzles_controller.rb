class PuzzlesController < ApplicationController

  def show
    @puzzle = Puzzle.find(params[:id])
    @image_url = @puzzle.image_url
  end

end
