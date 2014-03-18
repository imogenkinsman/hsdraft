class DraftsController < ApplicationController

  def new
    @draft = Draft.new
  end

  def create
    @draft = Draft.new(draft_params)

    redirect_to draft_path(@draft) if @draft.save
  end

  def show
    @draft = Draft.find params[:id]
  end

  private

    def draft_params
      params.require(:draft).permit(:hero_id)
    end

end
