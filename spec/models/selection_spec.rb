require 'spec_helper'

describe Selection do

  it { should have_many(:comments) }

  it 'can be instantiated' do
    selection = Selection.new
    expect(selection).to be_valid
  end

  it 'has a valid factory' do
    expect(build(:selection)).to be_valid
  end

  it "is invalid if a card in the set isn't 'picked'" do
    expect(build(:selection, picked: nil)).to be invalid
    expect(build(:selection, picked: 1)).to be valid
    expect(build(:selection, picked: 4)).to be invalid
  end

end
