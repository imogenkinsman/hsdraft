require 'spec_helper'

describe Card do

  it 'can be instantiated' do
    card = Card.new
    expect(card).to be_valid
  end

  it 'has a valid factory' do
    expect(build(:card)).to be_valid
  end

  it "is invalid without a correct card type" do
    expect(build(:card, type: 'minion')).to be_valid
    expect(build(:card, type: 'spell')).to be_valid
    expect(build(:card, type: 'weapon')).to be_valid
    expect(build(:card, type: 'furniture')).not_to be_valid
  end

  it 'is invalid without a valid curse_url' do
    expect(build(:card, curse_url: 'http://www.hearthpwn.com/cards/436')).to be_valid
    expect(build(:card, curse_url: 'http://www.google.com')).not_to be_valid
  end

end
