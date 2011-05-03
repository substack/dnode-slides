#!/usr/bin/env perl
use warnings;
use strict;
use DNode;

DNode->new({})->connect(5050, sub {
    my $remote = shift;
    $remote->{f}(1337, sub {
        my $x = shift;
        print "x = $x\n";
    })
});
