class CardsController < ApplicationController
  respond_to :json

  def index
    @cards = Card.all
  end

end
