// Docu : http://wiki.moxiecode.com/index.php/TinyMCE:Create_plugin/3.x#Creating_your_own_plugins

(function() {
  tinymce.create('tinymce.plugins.wpUserAvatar', {
    /**
     * Initializes the plugin, this will be executed after the plugin has been created.
     * This call is done before the editor instance has finished it's initialization so use the onInit event
     * of the editor instance to intercept that event.
     *
     * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
     * @param {string} url Absolute URL to where the plugin is located.
     */
    init : function(ed, url) {
      // Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');

      ed.addCommand('mceWpUserAvatar', function() {
        ed.windowManager.open({
            // call content via admin-ajax, no need to know the full plugin path
          file : ajaxurl + '?action=wp_user_avatar_tinymce',
          width : 500,
          height : 360,
          inline : 1
        }, {
          plugin_url : url // Plugin absolute URL
        });
      });

      // Register example button
      ed.addButton('wpUserAvatar', {
        title : 'Insert WP User Avatar',
        cmd : 'mceWpUserAvatar',
        image : url + '/../../images/wpua-20x20.png'
      });

      // Add a node change handler, selects the button in the UI when a image is selected
      ed.onNodeChange.add(function(ed, cm, n) {
        cm.setActive('wpUserAvatar', n.nodeName == 'IMG');
      });
    },

    /**
     * Creates control instances based in the incomming name. This method is normally not
     * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
     * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
     * method can be used to create those.
     *
     * @param {String} n Name of the control to create.
     * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
     * @return {tinymce.ui.Control} New control instance or null if no control was created.
     */
    createControl : function(n, cm) {
      return null;
    },

    /**
     * Returns information about the plugin as a name/value array.
     * The current keys are longname, author, authorurl, infourl and version.
     *
     * @return {Object} Name/value array containing information about the plugin.
     */
    getInfo : function() {
      return {
        longname  : 'WP User Avatar',
        author    : 'Bangbay Siboliban',
        authorurl : 'http://siboliban.org/',
        infourl   : 'http://wordpress.org/plugins/wp-user-avatar/',
        version   : "1.9.13"
      };
    }
  });

  // Register plugin
  tinymce.PluginManager.add('wpUserAvatar', tinymce.plugins.wpUserAvatar);
})();
