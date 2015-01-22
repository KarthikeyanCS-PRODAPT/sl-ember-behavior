import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';

var behaviorService = Ember.Object.create({
        isUnable: function( behavior, provider ) {
            this.set( 'behavior', behavior );
            this.set( 'provider', provider );
            return false;
        }
    });

moduleForComponent( 'sl-unable', 'Unit - component:sl-unable' );

/**
 * Ensures that the template is wrapping the content in a span tag and not in any block-level tags. While it appears
 * that core Ember functionality is being tested this test is ensuring that the implied contract about how this non-UI
 * component is rendered into the DOM is adhered to.
 */
test( 'Renders as a span tag with no classes', function() {
    var component  = this.subject({ behaviorService: behaviorService }),
        $component = this.append();

    equal( $component.prop( 'tagName' ), 'SPAN' );
});

test( 'Does not render content', function() {
    var component = this.subject({
            behaviorService : behaviorService,
            template        : Ember.Handlebars.compile(
                'Should not render'
            )
        }),
        $component = this.append();

    equal( $component.text(), '' );
});

test( 'isUnable() calls isUnable() on the behavior service', function() {
    var component = this.subject({
            behaviorService : behaviorService,
            behavior        : 'the_behavior',
            provider        : 'the_provider'
        }),
        $component = this.append();

    equal( behaviorService.get( 'behavior' ), 'the_behavior' );
    equal( behaviorService.get( 'provider' ), 'the_provider' );
});
