# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Stocks
Stock.create!(
    name: "Apple",
    tikr: "AAPL",
    last_price: 127.91,
    percent_change: 4.23,
)

Stock.create!(
    name: "Tesla",
    tikr: "TSLA",
    last_price: 690.33,
    percent_change: 2.16,
)

Stock.create!(
    name: "Google",
    tikr: "GOOGL",
    last_price: 2026.96,
    percent_change: 0.28,
)

Stock.create!(
    name: "Dogecoin",
    tikr: "DOGE",
    last_price: 0.0515,
    percent_change: 7.3765,
)

Stock.create!(
    name: "Bitcoin",
    tikr: "BTC",
    last_price: 52460.60,
    percent_change: 6.71,
)

Stock.create!(
    name: "Facebook",
    tikr: "FB",
    last_price: 299.43,
    percent_change: 3.21,
)