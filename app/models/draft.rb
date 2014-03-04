class Draft < ActiveRecord::Base
  has_many :selections
  has_many :comments

  validates :champion, inclusion: { in: %w(mage priest warlock paladin rogue druid hunter shaman warrior),
                                    message: "%w{value} is not a valid champion type"}

end
