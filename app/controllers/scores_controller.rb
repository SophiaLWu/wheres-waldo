class ScoresController < ApplicationController

  def new
    @score = Score.new
    @time = params[:score]

    respond_to do |format|
      format.html
    end
  end

  def create
    @puzzle = Puzzle.find(params[:score][:puzzle_id])
    # @score = score.new(name: params[:score][:name],
    #                   score: params[:score][:score])
    @score = @puzzle.scores.build(name: params[:score][:name],
                                  score: params[:score][:score])
    if @score.save
      flash[:success] = "Score saved."
    else
      flash[:danger] = "Score not saved."
    end

    redirect_to root_path
  end

end
