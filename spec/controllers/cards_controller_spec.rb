require 'spec_helper'

describe CardsController do

  describe 'GET #index' do

    it 'populates an array of cards' do
      card = create(:card)
      get :index, format: :json

      expect(response).to be_success
      expect(assigns(:cards)).to eq([card])
    end

  end

end
