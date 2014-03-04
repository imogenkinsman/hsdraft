class Comment < ActiveRecord::Base
  #TODO: get this working after adding User model
  belongs_to :user
end
