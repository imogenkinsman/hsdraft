describe Draft do

  it { should have_many(:selections) }
  it { should have_many(:comments) }

  it 'can be instantiated' do
    draft = Draft.new
    expect(draft).to be_an_instance_of(Draft)
  end

  it 'has a valid factory' do
    expect(build(:draft)).to be_valid
  end

  #it 'requires a valid champion type' do
  #  expect(build(:draft, champion: 'mage')).to be_valid
  #  expect(build(:draft, champion: 'frost golem')).not_to be_valid
  #end

end