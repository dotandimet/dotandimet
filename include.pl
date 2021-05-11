#!/usr/bin/env perl
use strict;
use warnings;

open(my $fh, '<', $ARGV[0]) || die "Error opening $ARGV[0] - $!";
while (my $line = <$fh>) {
	$line =~ s/\[\%\%\s*([^\%]+)\s*\%\%\]/command($1)/ge;
	print $line;
}

sub command {
	my ($cmd) = shift;
	if ($cmd =~ /^include (.+)/i) {
		my $f = $1;
		$f =~ s/(^\s+|\s+$)//g;
		if (-r $f) { return include($f) }
		else { warn "unknown or unreadable $f"; return '' }
	}
	else {
		warn "unknown directive $cmd";
	}
}

sub include { local @ARGV = @_; return join '', (<>); }
