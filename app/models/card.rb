class Card < ActiveRecord::Base

  validates :type, inclusion: { in: %w(minion spell weapon),
            message: "%{value} is not a valid card type" }

  # in the future, don't name a column 'type'
  self.inheritance_column = nil

end
