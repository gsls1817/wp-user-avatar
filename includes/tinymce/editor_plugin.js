(function(){tinymce.PluginManager.requireLangPack('wpUserAvatar');tinymce.create('tinymce.plugins.wpUserAvatar',{init:function(ed,url){ed.addCommand('mceWpUserAvatar',function(){ed.windowManager.open({file:ajaxurl+'?action=wp_user_avatar_tinymce',width:300,height:175,inline:1},{plugin_url:url})});ed.addButton('wpUserAvatar',{title:'Insert WP User Avatar',cmd:'mceWpUserAvatar',image:url+'/../../images/wp-user-avatar.png'});ed.onNodeChange.add(function(ed,cm,n){cm.setActive('wpUserAvatar',n.nodeName=='IMG')})},createControl:function(n,cm){return null},getInfo:function(){return{longname:'WP User Avatar',author:'Bangbay Siboliban',authorurl:'http://siboliban.org/',infourl:'http://wordpress.org/extend/plugins/wp-user-avatar/',version:"1.2.1"}}});tinymce.PluginManager.add('wpUserAvatar',tinymce.plugins.wpUserAvatar)})();