class DraftsController < ApplicationController

  def new
    @draft = Draft.new
  end

  def create
    @draft = Draft.new(draft_params)

    redirect_to draft_path(@draft) if @draft.save
  end

  def show

  end

  private

    def draft_params
      params.permit(:hero_id)
    end

end
