class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :state
      t.string :grades_taught
      t.integer :years_experience
      t.string :subjects_taught
      t.string :password_digest
      t.string :img_url

      t.timestamps
    end
  end
end
