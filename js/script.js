/**
 * Live Twitter Stream
 */
$(function(){
  $('#twitter-stream').liveTwitter(
    'clujcowork', {
      mode: 'user_timeline',
      limit: 4,
      refresh: true
    }, function(){
      $('#twitter-stream .loading').remove();
    });
});
