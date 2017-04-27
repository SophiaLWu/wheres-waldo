class AddPuzzleIdToCharacters < ActiveRecord::Migration[5.0]
  def change
    add_column :characters, :puzzle_id, :integer
  end
end
