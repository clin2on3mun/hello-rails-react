class Api::GreetingsController < ApplicationController
  def random_greeting
    message = Greeting.order('RANDOM()').first
    render json: { greeting: message.message }
  end
end
