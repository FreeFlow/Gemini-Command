(function() {
  window.onload = function() {
    var background, helper, orbit, planet, player, players, socket;
    helper = new Canvas(document.getElementById('game-canvas'));
    background = new Background();
    planet = new Planet();
    orbit = new Orbit(200);
    window.players = players = new PlayersCollection();
    window.player = player = new PlayerModel();
    helper.draw(function() {
      players.update();
      background.draw(this);
      planet.draw(this);
      orbit.draw(this);
      return players.draw(this);
    });
    window.socket = socket = io.connect();
    socket.on('player:update', function(player_data) {
      if (player_data === socket.socket.sessionid) {
        player_data.self = true;
      }
      player = players.get(player_data.id);
      if (!player) {
        player = new PlayerModel(player_data);
        if (player_data.self) {
          window.current_player = player;
        }
        player.players = players;
        players.add(player);
        return;
      }
      player.clear();
      player.set(player_data);
      if (!player_data.self) {}
    });
    socket.on('player:disconnect', function(player_data) {
      player = players.get('player_data.id');
      return players.remove(player);
    });
    socket.on('connect', function() {});
    return socket.on('disconnect', function() {
      return console.error('disconnected');
    });
  };
}).call(this);
