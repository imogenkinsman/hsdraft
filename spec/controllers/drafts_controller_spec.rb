require 'spec_helper'

describe DraftsController do

  describe 'GET #new' do
    it 'assigns a new Draft to @draft' do
      get :new
      expect(assigns(:draft)).to be_a_new(Draft)
    end

    it 'renders the :new template' do
      get :new
      expect(response).to render_template(:new)
    end
  end

  describe 'GET #show' do
    before(:each) do
      @draft = create(:draft)
      get :show, id: @draft
    end

    it 'assigns the requested Draft to @draft' do
      expect(assigns(:draft)).to eq(@draft)
    end

    it 'renders the :show template' do
      expect(response).to render_template(:show)
    end
  end

  describe 'POST #create' do
    context 'with valid attributes' do
      it 'saves the new draft to the database' do

      end

      it 'redirects to #show' do

      end
    end

    context 'with invalid attributes' do
      it 'does not save the draft to the database' do

      end
    end
  end

end
