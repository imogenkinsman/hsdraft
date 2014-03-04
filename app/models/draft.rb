class Draft < ActiveRecord::Base
  has_many :selections
  has_many :comments
end
