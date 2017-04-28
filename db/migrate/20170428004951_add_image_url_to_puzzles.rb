class AddImageUrlToPuzzles < ActiveRecord::Migration[5.0]
  def change
    add_column :puzzles, :image_url, :string
  end
end
