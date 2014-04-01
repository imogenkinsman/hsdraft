require 'spec_helper'

describe CardsController do
  render_views

  describe 'GET #index' do

    it 'populates an array of cards' do
      card = create(:card)
      get :index, format: :json

      expect(response).to be_success
      expect(JSON.parse(response.body).first["card"]["name"]).to eq "angry chicken"
    end

  end

end
