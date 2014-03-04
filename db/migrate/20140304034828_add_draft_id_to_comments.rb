class AddDraftIdToComments < ActiveRecord::Migration
  def change
    add_column :comments, :draft_id, :integer
  end
end
