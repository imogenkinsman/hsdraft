require 'spec_helper'

describe Selection do

  it { should have_many(:comments) }

  it 'can be instantiated' do
    selection = Selection.new
    expect(selection).to be_an_instance_of(Selection)
  end

  it 'has a valid factory' do
    expect(build(:selection)).to be_valid
  end

end
