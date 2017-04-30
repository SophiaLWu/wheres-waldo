class ScoresController < ApplicationController

  def new
    @score = Score.new
    @time = params[:score]

    respond_to do |format|
      format.html
    end
  end

  def create
    puzzle_id = params[:score][:puzzle_id]
    @puzzle = Puzzle.find(puzzle_id)
    @score = @puzzle.scores.build(name: params[:score][:name],
                                  score: params[:score][:score])
    if @score.save
      flash[:success] = "Score saved."
    else
      flash[:danger] = "Score not saved."
    end

    redirect_to scores_path(:puzzle_id => puzzle_id)
  end

  def index
    puzzle_id = params[:puzzle_id]
    @scores = Score.where(:puzzle_id => puzzle_id)
    @puzzle = Puzzle.find(puzzle_id)
  end

end
