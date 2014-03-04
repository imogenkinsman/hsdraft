class Card < ActiveRecord::Base

  validates :type, inclusion: { in: %w(minion spell weapon),
            message: "%{value} is not a valid card type" }

end
