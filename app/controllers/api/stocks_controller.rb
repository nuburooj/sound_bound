class Api::StocksController < ApplicationController
    def show 
        @stock = Stock.find_by(tikr: params[:id].upcase)
        if @stock
            render json: @stock
        else
            render json: ['Stock not found'], status: 422
        end
    end

    def index
        @stocks = Stock.all
        if @stocks
            # render :index
            render json: @stocks 
        else
            render json: ['Stocks not found'], status: 422
        end
    end
end