class CreateResources < ActiveRecord::Migration[6.1]
  def change
    create_table :resources do |t|
      t.timestamps
    end
  end
end
